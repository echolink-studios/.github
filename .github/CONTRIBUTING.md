# Contributing

Thanks for your interest in contributing.

This document is intentionally general and serves as a starting point. Teams and repositories can extend these guidelines with project-specific rules over time.

## Before You Start

- Check existing issues and pull requests to avoid duplicate work.
- Open an issue first for large changes so scope and direction are aligned early.
- Keep changes focused: one concern per pull request whenever possible.

## Development Setup (Template)

Some projects in this organization use Bun and GitHub Packages. If needed, set your global Bun config in `~/bunfig.toml`:

```toml
# ~/bunfig.toml

[install.scopes]
"@echolink-studios" = { url = "https://npm.pkg.github.com", token = "$BUN_AUTH_TOKEN" }
```

If your environment requires it, set `BUN_AUTH_TOKEN` in your shell config or in a `.env.local` file.

## Branching and Commits

- Use short-lived branches (`feature/<name>`, `fix/<name>`, `chore/<name>`).
- Write clear commit messages that explain intent, not only code changes.
- Prefer small, reviewable commits.

## Pull Requests

When opening a PR:

- Explain the problem and your approach.
- Link related issues.
- Include screenshots or logs when UI or behavior changes are involved.
- Call out breaking changes explicitly.

## Quality Checklist

Before requesting review:

- [ ] Changes are tested locally.
- [ ] Existing tests pass (where available).
- [ ] Linting/formatting passes (where configured).
- [ ] Relevant docs were updated.

## Code Review Expectations

- Be respectful, specific, and constructive.
- Assume positive intent and focus on improving the code.
- Resolve feedback with follow-up commits or discussion.

## Security and Sensitive Data

- Never commit secrets, tokens, or private keys.
- Use environment variables for credentials.
- Report security concerns privately through the appropriate channel.

## Need Help?

If anything is unclear, open an issue and ask for guidance before investing significant implementation effort.

