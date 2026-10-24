# Lost Acropolis

Mobile tabletop-RPG card game, a static web game served from the repo root (index.html) on GitHub Pages.

Before doing any work, read STUDIO.md. It holds the studio rules, the steps of a shift and the merge rules Lucas set. Work from BACKLOG.md, log every call you make on your own in DECISIONS.md, and put open questions in QUESTIONS.md.

- Test: `npm test` (Playwright smoke test on a phone viewport). In Claude cloud sessions Playwright is preinstalled, so if `npm install` is slow, run `node tests/smoke.cjs` directly.
- Extend tests/smoke.cjs whenever a shift adds a new screen or step to the core loop.
