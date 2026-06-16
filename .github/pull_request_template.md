<!--
  ⚠️  PR TITLE must follow Conventional Commits — it becomes the commit message on main.

  Format:  <type>(<scope>): <short description>

  Types:
    feat      → new feature                       bumps MINOR version
    fix       → bug fix                           bumps PATCH version
    chore     → maintenance, deps, tooling        no version bump
    docs      → documentation only               no version bump
    refactor  → code change, no behaviour change  no version bump
    perf      → performance improvement           no version bump
    test      → adding / fixing tests             no version bump
    ci        → CI/CD changes                     no version bump
    revert    → reverts a previous commit         no version bump

  Breaking change → add  !  after the type, e.g.  feat!: redesign auth flow
                    or include  BREAKING CHANGE: <description>  in the PR body below.
                    This bumps the MAJOR version.

  Examples:
    feat(auth): add OAuth2 login
    fix(api): handle null response from payments service
    chore(deps): bump next from 14.1.0 to 14.2.0
-->

## 📋 What & Why
<!-- What does this PR do, and why? Link to the relevant issue/task. -->

Closes #

## 🔀 Type of Change
<!-- Tick whichever applies. -->

- [ ] `feat` — New feature
- [ ] `fix` — Bug fix
- [ ] `refactor` — Code change, no behaviour change
- [ ] `perf` — Performance improvement
- [ ] `chore` — Maintenance / tooling / deps
- [ ] `docs` — Documentation only
- [ ] `test` — Tests only
- [ ] `ci` — CI/CD pipeline
- [ ] 💥 **Breaking change** (explain below)

## 💥 Breaking Change Description
<!-- If this is a breaking change, describe what breaks and the migration path. Delete this section if not applicable. -->

## 🧪 How to Test
<!-- Steps to verify the change works correctly. -->

1. 
2. 

## ✅ Checklist

- [ ] PR title follows Conventional Commits format
- [ ] Tests written / updated and passing locally
- [ ] No new lint or type errors
- [ ] Self-reviewed the diff
- [ ] Relevant docs updated (if applicable)


