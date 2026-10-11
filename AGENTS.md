# AGENTS.md

This is Leo Wong’s personal website and blog. Read `README.md` for
repository setup and commands. Changes to this file require confirmation.

## Session start and context

- Read `README.md` and inspect Git status. Preserve existing staged,
  unstaged, and untracked work; do not rerun checks merely to resume.
- Load specialist guidance only when relevant:
  - Product scope or capabilities: `PRODUCT.md`.
  - Visual changes: `DESIGN.md`, the matching `.impeccable/surfaces/`
    brief, and applicable Impeccable guidance.
  - CSS changes: `CSS-GUIDELINES.md` and `docs/CSS.md`.
  - Responsive changes: `RESPONSIVE-GUIDELINES.md`.
  - MDX or Notebook component usage: `docs/design/AUTHORING.md`.

## Development protocol

- Work in bounded batches; keep unrelated fixes and redesigns separate.
- Reuse the port-3000 dev server. If unavailable, ask the user to start
  it manually; do not start another server.
- After a batch creates, edits, deletes, or renames files under `src/`
  or `test/`, run only `npm run test`, once. Fix failures caused by
  the batch. Pre-existing changes do not trigger this rule.
- For batches outside `src/` and `test/`, including documentation-only
  changes, do not run tests unless requested.
- CSS lint, builds, browser suites, screenshots, hosted CI, and other
  extra checks require an explicit request. Confirm prerequisites first.
- This is local coding-agent policy, not a request to alter package
  commands or CI workflows.

## Content and documentation

- Preserve authored wording/data, post IDs/slugs, and heading anchors
  unless the user requests changes.
- For maintenance, preserve the accepted appearance, publishing
  behavior, component APIs, and article fallback rules, values, and
  order. Propose changes outside that scope separately.
- Give each fact or rule one authoritative home; link instead of copying.
- Distinguish proposals, confirmed decisions, and unverified assumptions.
  Report only checks actually run; preview acceptance is not
  cross-browser or hosted CI evidence.
- Confirm the destination before moving or deleting documentation
  content. Keep generated artifacts out of maintained documentation.

## Approval boundaries

Ask before:

- Editing `AGENTS.md`.
- Changing dependencies, package commands, CI, or security configuration.
- Resetting, cleaning, restoring, staging, committing, or pushing.
- Replacing the accepted visual system or changing protected behavior
  outside the requested scope.

## Writing a Good AGENTS.md

- **Keep it short.** Every line loads on every session. Target about
  100–150 lines or fewer; treat 300 as a hard ceiling, not a goal.
- **Keep standing instructions relevant.** Put task-specific detail in
  reference files, with a short instruction here saying when to read them.
- **Use progressive disclosure.** Load references on demand rather than
  requiring all documentation at session start.
- **Point, don't copy.** Link to the authoritative file or section instead
  of duplicating facts and rules.
- **Avoid stale narrative.** Keep diagnosis, history, and session results
  out of standing instructions; use Git history or the relevant review record.
- **Pair prohibitions with alternatives.** State what to do instead of
  only saying what not to do.
- **Be concrete.** Name exact commands, paths, triggers, and boundaries
  rather than saying “run tests” or “follow good practices.”
- **Keep it deliberately curated.** Do not auto-generate or replace this
  file wholesale without review and confirmation; propose focused changes
  that serve this repository.
