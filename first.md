# "First"

This is a free flowing text, a memory dump of what I had in mind when developing the project. A fragment of context to try a hypothesis I had in my mind. A simulation of a conversation with a not very talkative dev :)

## Original idea

In my pet projects I started to feel annoyed by the accumulation of files that have little or nothing to do with the repo itself. "Oh, but this code needs this tool with this config". Nope, usually that is what sales people want me to believe, in most cases, even the life cycle of the tooling around the project is independent of any particular revision.

The lack of strategy around ergonomics lead to invasive solutions, which became pervasive to the point that most devs would never think about it at all. It is just part of reality as day and night.

Devs initially think about repositories as where they'll put their code in their language of choice. IDEs, OSs, other tools, none of that is imediatelly thought to leak into it.
But as things evolve, you never get a completely "pure" repo.

You may start the repo with a README.md together with your source, which is not really essential, but common practice, good practice, convenient...

Even with all discipline in the world, the README will eventually diverge from reality or won't be feasible to contain the complete story, in the best case staying as a small entry point to some much larger documentation somewhere else, maybe another repo with another README...

Then you (or the ai assistant of preference) won't want to reinvent the wheel, will start using libraries which might contain their own little config files, which is ok, common practice...

As architecture grows complex, you will probably use appropriate frameworks, with their own configs, maybe some templating languages, some scripts to glue everything together in yet other different languages, which is ok, unavoidable...

During this story, you will target different environments, that have their own quirks, tech stacks, maybe separate repos for provisioning, orchestration, but maybe because of those, you need some configuration of those back in your main repo so things can work together, because that is how things work...

Now (or since the beginning for new stuff) you get generative ai support, with their own little config files and markdown documents, not for you, but for the ai itself. You commit them to your repo and now maybe your ci can look at them but you need to add some other little config files here and there to avoid halucinations because of mismatches between the dev environment and the ci containers, and that is just how things are...

## Is it?

Your project, your source code and absolutely essential files to get a build from it, they are the focal point of everything else orbiting and leaking into them. It didn't need to be this way but that is how things evolved.

Your build tool has a life cycle of its own, doesn't care about yours (unless you are the build tool dev, congrats, but thinking about the other tooling), your ci environment has a lifecycle of its own, your orchestrating platform, your OS, none of those care about your new shiny idea, and that is the real fact.

Solutions evolved in a way that we need to spend effort into someone else's tool, but the impact of their lifecycles in our codebase is an uncovered side effect, a bug that grew in the process, not a feature.

If a new brush is created, painters don't need to change their whole atelier, they just decide if they buy the new brush or not. If a company launches a new colorful guitar, musicians don't need to create a new version of their songs.

If you are using one ai assistant and want to try a different one, in an ideal world, you shouldn't need any change in your repository. To be fair, in an ideal world where some assistant needs to save files in your repository, the only change you should need to do should be adding them to gitignore. It is your project, not theirs.

"Oh, but the ai will generate a lot of stuff". A brush transfer the paint to the canvas in a predictable flow, and because of that you would say the brush is the author? A guitar that can sustain a tone in vibrato for as long as the musician needs it should be credited for the song? Your code is your code, full stop. An artist without their tools cannot do their work, but they still the artists, the tools still tools, the devs still devs.

## So what?

We cannot change reality and obstacles are part of it. The ones we cannot find a way around, become the way. With that in mind, what if we could do just what I mentioned before, the only change in our repo is to ignore the extraneous stuff? What if when we decide for a certain ai tool, first we load a config set appropriate for it? What if it was as simple as "first load gemini" and if tomorrow morning you "first load claude".

Just as we, as biological entities, have our own life cycles. At each change in life, we need to exercise letting go. Even when one gets a promotion, it frequently means letting go of previous responsibilities. You are not your role, when you switch roles, you are still you and if you know when to use or transpose your previous knowledge to new situations, you are setting yourself up for success.

Software on the other hand doesn't live by the same constraints and possibilities. Software is not conscious, doesn't get distracted because some little muscle on the face decided to twitch by itself, or get interrupted by some sudden family emergency. But generative ai is a piece of software that can at least give the illusion of cognition, bringing similar possibilities as the biological entities.

On its foundation, it is only a "next element calculator". Just as in math, where you can calculate derivatives of a function or go the other direction and get a family of antiderivatives, with gen-ai you can summarize a piece of text or ask for one of the family of possible elaborations.

## And?

A session for the ai is the contact point between the user and the ai solution life cycle. It is the shortest unit of meaningful interaction. The current standard approach has a few limitations if we role-play as a dev talking to an almost human level ai (which companies like to hype but couldn't be further away from the truth). 

I personally don't feel comfortable with most of vocabulary in use so for the context of what follows, let's call an ai coding assistant composed by an llm, some smart hidden system prompts and support for user defined rules or memories, a cognition simulation, or cogsim for short.

When you end a session, unless you do constant context engineering, you are probably loosing learnings on both sides (user and ai). In between sessions, you retain some knowledge by your biological nature, but from the ai side, each new session is like being born with predefined knowledge.

We are more of a highly coupled solution, optimized by ages to survive in this planet, and usually a disassociation of the parts is, let's say, harmful for the individual. For a cogsim, there is no notion of life or death, and the individual parts can change on the fly with the right tech in place.

At the same time we see news that LLMs are performing great, better and better, with university grade results or leading people to believe in the existence of a digital soul, we are also met by recommendations to tune down our speech abilities to reduce the possibility of mistakes and hallucinations. In an ironic situation, we are being told to play dumb so ai can look awesome. That we need to engineer our project contexts in a way to avoid the current limitations of the tech.

Different projects are coming with their own very interesting advancements, like configurations to selectively include fragments in the context. My hypothesis is that there is a better way than playing dumb, or at least there is a way to play together with the great people developing the current foundations: full context swapping.

## Swapping what?

As I paraphrased before (and many before me), the obstacle is the way. If having too big of a single context is a problem, let's swap it full, not only the prompt and some attached elements, but the whole memories, the whole configuration. We are still us, but the cogsim doesn't need to be.

Instead of a project having lots of markdown files containing text that might be needed for different roles or activities done in a certain repo, we could have independent rule sets, tuned for those different roles and tasks, but living in a separate repository, so this element of the cogsim also gets its own life cycle.

Also, we might want to completely switch foundational components, like for one task, first we load the appropriate rule set for it using Claude Code for instance but for a different moment, we might want to switch to Google Gemini completely, not just as a model behind an IDE plugin, but as if the cli was the only thing to have ever existed from the point of view of the cogsim.

Now we have a virtual session that spans beyond each individual session, with the potential of delivering better results inside the current tech limitations.

So the intent of this project is taking steps in that direction and the first one is to make the full context swapping trivial, simple, almost transparent. That is the reason why I used the word "First" as the title and in a few sentences, creating a bit of a hidden documentation, as the command will literally be "first" and the main action will be "load" expecting a name representing the id of the self contained context to be loaded in a non intrusive way (files can be added to gitignore).

"First" is also a reference to "First Assistant Director", a parallel to film production where we, the devs, are the Directors, the cogsim and tooling are the cast and crew, and our 1st AD will be the one guaranteeing that everyone and everything is in place to realize our vision.

Last, there is also the use of this cogsim term in this context (This is a small char sequence that for sure someone could have come up with somewhere else but I'm pretty sure that we have something unique in the context of this text. Looking forward to where this will evolve to)

I'm initially focused on ai assistant related files, but from the other elements implicit in this text you should already see that we can go in many other directions. Still, we need to start somewhere.

## And what was the other hypothesis

From the multitude of approaches to software development, spec driven development is gaining traction in the age of ai assistants due to the effect the process has in reducing hallucinations and reaching usable solutions faster.

My hypothesis is that, having a more freely written text like this one, unfiltered, not structured under the constraints of current tech or popular practices of context engineering can be a valuable input to set the general course and focus before the first spec is written. Metaphorically a sincere open letter from a human soul to a future cogsim.

Without it, every rabbit hole might look like an interesting next spec. With it, there is a clear vision, full of implicit color about where are we going with it.

Sincerely,
Oswaldo

Hamburg, Oct 2025, 00:42