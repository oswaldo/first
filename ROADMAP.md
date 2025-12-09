# Roadmap

The goal of this project is to have a non-intrusive tool for full context (fctx for short) swapping.

For a first phase, the project will be developed in scala-cli using scala-native with scala 3 syntax (so we will
prioritize relevant libraries that support that combination)

The initial feature complete / most lovable product will contain the following modules (actual implementation might
diverge a bit as we progress but just to have a main idea):

1. Config reading
   1. Values are stored in HOCON files
   2. All keys have sensible default values (if no config is found, all keys are default to a hopefully useful out of
      the box state)
   3. Config is expected to follow a "fctx definition cumulative behaviour", existing in `~/.first` and/or in the
      folders called `.then` from the root, down to the folder where the command was called plus a collection of paths
      coming from a `then` argument to the command, using this as the order keys get accumulated or overwritten
   4. There will also be an `only-config` for situations where we don't want this cumulative behaviour at all
   5. There will be a `create-config-template` action that will output a full config with default values in the
      requested path
   6. The most important config files are called `fctx-def.conf` inside folders named after the fctx they represent. So
      if the dev wants a fctx called "main-agent", config files need to be in structures like
      `main-agent/fctx-def.conf` on the place the user feels appropriate.
   7. The content of each `fctx-def.conf` file will look like the following:

      ```hocon
      // `includes` is a list of other fctx names like `["main-agent", "agent-specialization-a"]` to be included in order before this one, from all the places as in the "fctx definition cumulative behaviour"
      // HOCON also has an include directive but for a different semantic. See it's documentation for more information
      // The config reading will abort / return a Left(ConfigException) as soon as a circular dependency is found, indicating the sequence until the failure
      includes: [
        // empty by default
      ]
      artifacts [
        // empty by default
        artifact {
            // the `path` to something that can be swapped
            // preferably they are relative paths to the hocon file itself, like `"../../some-folder/example.txt"`
            // while the hocon files are acumulated in memory, the paths get resolved in absolute paths, aborting if one of the paths, be it a file or directory, is not found.
            // artifacts with empty `path` are ignored
            path: ""

            // the value being swapped into the destination might be a copy or a symlink
            // if running on a mac or linux, the default will be `symlink`. on windows it is ignored and will always be `copy`
            swap-as: "symlink"

            // the `md5` stores the checksum of the file that can be swapped, so it can be checked for emitting warnings if theydon't match when "swapping out" (meaning their source artifacts might need to be updated, together with the stored md5)
            // an empty symlink means the file was never checked before, and the first seen value will be stored as reference
            md5: ""

            // if the file is on git, `revision` will store what was the revision when the checksum was taken and will also be used for warnings about unexpected situations
        }
      ]
      ```

   8. A successful fctx load will be represented as a Right(FctxDef) instance where FctxDef will be a case class with
      the name of the fctx and the other consolidated properties
   9. As there are default expectations for everything, unless there is an error, there will always be an instance of
      FctxDef, even if it is the special constant FctxDef.empty, with the name "" (literally an empty string)
   10. The other config file is `~/.first/first.conf` which for now is expected to only have a `fctx-files` key as a
       collection of known fctx definition paths, and another key `last-loaded` with instances of `fctx` objects with
       `name` and `at` properties.
   11. Configuration loading will support a parent limit to control how far up the directory tree it should look for
       cumulative configurations, providing better isolation for nested projects.

2. Actions
   1. Unless written otherwise or logically meaningless, it should be possible to ask for any of them as a command line
      argument (for instance, with `--help` to see the help), or after calling the tool with no specific action (
      pressing down until `help` is highlighted and pressing enter)
   2. Independent of fctx
      1. `help` shows instructions about every possible action
      2. `ls` lists all fctxs kwnown at that moment and the related conf file locations
   3. Context management actions
      1. `save` followed by a valid folder name composed only by letters, numbers, dashes or underscores. it should
         have an optional argument `at` for a target folder were the `.then/{{fctx name}}/fctx-def.conf` should be
         created and a mandatory list argument `paths` for the artifacts that should populate it, asking if it should
         overwrite case some existing definition is found. will save to the `~/.first/first.conf` that the just
         created fctx is the last loaded fctx at that location. It will also support flags for handling symbolic
         links, allowing the user to decide whether to follow, ignore, or reject them.
      2. `load` followed by a fctx name valid for the location the command is being called from, or valid at the
         location specified by an `at` optional argument. this will copy the needed artifacts as specified, doing
         nothing if already there and pointing inconsistencies. will save to the `~/.first/first.conf` the last loaded
         fctx at that location
      3. `swap` followed by a fctx name valid for the location the command is being called from, or valid at the
         location specified by an `at` optional argument followed by a mandatory. similar to load, but will ask for
         confirmation to remove the files that where part of the previous fctx but not of the current one.
   4. Cleanup actions
      1. `rm-def` removes the fctx definition and its stored file copies from the central `~/.first/` storage, but
         leaves the project's working files untouched.
      2. `rm-files` temporarily removes an fctx's files from the project, but keeps the definition in `~/.first/` so
         it can be loaded again later.
      3. `rm-all` completely purges an fctx: removing the definition from `~/.first/` and deleting its files from the
         project. This action will require explicit user confirmation.
   5. There should be a flag `--force` so that, when yes/no questions would arise, would take yes as the answer
   6. There should be a flag `--dry-run` so that we see what changes would be made by a certain action, without
      actually doing them
   7. There should be a flag `--verbose` where details about loading the files, accumulating to the final result,
      running the command and statistics about what happened would be logged using some scala-native compatible logging
      library
   8. All actions that modify the file system (`load`, `swap`, `save`, `rm-*`) will be designed to be transactional. If
      an operation is interrupted, the tool will attempt to roll back the changes to prevent leaving the project in a
      broken or inconsistent state.

3. CLI: module integrating a command line library to parse the actions/commands and flags and forward the call to the
   concrete action implementation
4. Interactive: module integrating some scala-native compatible terminal widget rendering library to get the desired
   action, needed arguments and forward the call to the concrete action implementation

## Milestones

1. A `./first` scala-native scala-cli script can be called, being compiled on the fly and printing "first"
2. A fctx definition can be read through unit tests with cases covering the cumulative behaviour
3. The `first` script can answer to the `help` and `ls` actions via arguments or interactivelly using arrow keys after
   scala-native compatible command line options and "terminal widget rendering" libraries are selected
4. [x] We can save a new fctx using the save cli action
5. [x] We can load a saved fctx using the load cli action
6. [x] We can swap between fctxs using the swap cli action
7. [x] We can use remote artifacts and contexts (http/https/gh)
8. [x] We can install the tool easily with `curl -fsSL https://raw.githubusercontent.com/oswaldo/first/main/install.sh | sh`
9. We can migrate and link contexts using `save --to` and `save --link`, and move them with `mv`
10. We can dogfood the tool for its own development
11. We can safely manage and remove fctxs using the new cleanup actions (`rm-def`, `rm-files`, `rm-all`).
12. We can perform all supported cli actions using a terminal interactive screen / mode

## Future Ideas

These are placeholders for future consideration and need more thought to be fleshed out:

1. **Pluggable Sources and Targets**: extend context management beyond disk and http to support other protocols and mechanisms (e.g., loading from inside a zip, applying to an ftp, delegating copying to rsync).
2. **Plugins**: support for extending functionality via plugins.
3. **Control Center**: a centralized management interface.
