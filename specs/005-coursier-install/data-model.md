# Data Model

## AppDescriptor

The `AppDescriptor` represents the JSON structure required by Coursier.

```scala
case class AppDescriptor(
  repositories: List[String],
  dependencies: List[String],
  launcherType: String, // e.g., "scala-native" or "bootstrap"
  mainClass: String
)
```

### Fields

- **repositories**: List of Maven repository URLs.
- **dependencies**: List of Maven coordinates (e.g., `org:name:version`).
- **launcherType**: The type of launcher to generate.
- **mainClass**: The entry point of the application.
