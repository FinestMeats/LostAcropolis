# LostAcropolis Studio

LostAcropolis is a mobile cyberpunk action RPG built around collectible cards. It's a web game that runs in a phone browser and is published on GitHub Pages.

Live at https://finestmeats.github.io/LostAcropolis/ (keep the capitalisation).

This file is the studio's rulebook. Every scheduled studio shift reads it first.

## Vision (set by Lucas 2026-10-24)
- **Setting:** cyberpunk, in a future Greece. "Lost Acropolis" names the setting only; it is not a ruins-crawl or a historical game.
- **Feel:** gameplay must be more engaging than a tabletop RPG or a card game. The TTRPG side shows up only in the mechanics: stats, rolls, checks and builds. The moment-to-moment play should be active and fast, not turn-by-turn paperwork.
- **No party deck.** Each account has **5 character slots**, so the player can build and play 5 different character styles.
- **Account-wide collection:** every card, item and unlock belongs to the account and can be used by every character independently. Equipping card X on character 1 does not take it away from characters 2 to 5.
- **Account-wide progression:** as the player progresses, account-wide buffs and stat boosts unlock and apply to all characters.
- **Character view screen (must have):** the player interacts with cards to equip weapons, armour, enhancements and other items to a character, and sees how the character's stats change.
- Built for phones: short sessions, playable with one thumb.
- No real-money monetization until Lucas decides otherwise.

## Tech (Lucas: "whatever is necessary for the best user experience")
- Default to plain HTML/CSS/JS with ES modules, with no build step and no framework, so it stays fast on phones.
- Add a library only when it clearly improves the player experience (for example, a canvas or WebGL renderer for action scenes). Log the reason in DECISIONS.md and keep that PR open for Lucas, per the merge rules.
- Aim for an installable PWA (manifest plus offline cache) so it feels like an app on the home screen.

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
