# LostAcropolis Studio

LostAcropolis is a mobile tabletop-RPG collectible card game, built as a web game that runs in a phone browser and is published on GitHub Pages.

Live at https://finestmeats.github.io/LostAcropolis/ (keep the capitalisation).

This file is the studio's rulebook. Every scheduled studio shift reads it first.

## Vision (draft, Lucas to refine)
- Short sessions built for phones, and fully playable with one thumb.
- You collect cards (heroes, gear, spells, encounters) and build a party deck.
- You run the deck through tabletop-style adventures in the ruins of the Lost Acropolis.
- No real-money monetization until Lucas decides otherwise.

## How a shift works
1. Read STUDIO.md, BACKLOG.md, DECISIONS.md (the last 20 entries) and QUESTIONS.md.
2. Pick the top `Ready` item in BACKLOG.md. If none is ready, groom the backlog: break down an epic or write a design spec.
3. Create the branch `shift/YYYY-MM-DD-<slug>`, build the item, and keep the change small.
4. Run `npm test`, the headless browser smoke test: the page loads, there are no console errors, and the core loop works.
5. Open a PR, then apply the merge rules below.
6. Update BACKLOG.md (move the item to Done, add any follow-ups) and append to DECISIONS.md.
7. Post a summary of five lines or fewer to the project thread: what shipped, what is waiting, and any questions.

## Merge rules (chosen by Lucas 2026-10-24: auto-merge if tests pass)
- **Auto-merge:** small, reversible changes that pass the tests. That covers features, art, balance, UI, docs and bug fixes.
- **Leave as a PR for Lucas:** save-format changes or anything that could wipe player progress, large refactors, changes to the core loop or concept, and new dependencies.
- **Always ask first, never do alone:** spending money, app-store submissions, public posts, monetization, deleting repos, branches or data, and changing the game's name or concept.

## When stuck
Write the question to QUESTIONS.md with a recommended answer, then move on to the next item. Don't block the shift on it.
