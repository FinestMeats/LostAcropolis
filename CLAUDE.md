# Lost Acropolis

Mobile tabletop-RPG card game, a static web game served from the repo root (index.html) on GitHub Pages.

Live URL: https://finestmeats.github.io/LostAcropolis/ (the path is case-sensitive, so keep the capital L and A).

Before doing any work, read STUDIO.md. It holds the vision, the steps of a shift, the merge rules Lucas set, and a table saying which `docs/rules/` file to read for each kind of job (security, legal, game feel): open only the ones the job touches. Work from BACKLOG.md, log every call you make on your own in DECISIONS.md, and put open questions in QUESTIONS.md.

- Test: `npm test` (Playwright smoke test on a phone viewport). In Claude cloud sessions Playwright is preinstalled, so if `npm install` is slow, run `node tests/smoke.cjs` directly.
- Extend tests/smoke.cjs whenever a shift adds a new screen or step to the core loop.
- Saving tokens: one job per chat, search before reading, read line ranges rather than whole files.
