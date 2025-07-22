module.exports = {
  extends: ["@commitlint/cli", "@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",                   // New feature
        "fix",                    // Bug fix
        "modify",                 // Modified and existing feature
        "update",                 // updated an existing feature
        "docs",                   // Documentation-only changes
        "style",                  // Changes that do not affect meaning (whitespace, formatting)
        "refactor",               // Code changes that neither fix a bug nor add a feature
        "perf",                   // Performance improvements
        "test",                   // Adding or updating tests
        "build",                  // Changes affecting the build system or dependencies
        "ci",                     // Continuous Integration configuration changes
        "chore",                  // Other changes that don't modify src or tests
        "revert",                 // Reverts a previous commit
      ],
    ],
    "subject-case": [2, "always", "sentence-case"],
  },
};
