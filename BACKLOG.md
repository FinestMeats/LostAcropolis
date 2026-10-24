# Backlog

Statuses: `Ready` (fully specified), `Needs design`, `Blocked (question)`, `Done`.
Sizes: S, M, L. A shift takes one S or M item, or one slice of an L item.

## Now
1. [Needs design][M] Core loop spec, in docs/design/core-loop.md: deck, party, an encounter turn, rewards.
2. [Needs design][M] Card data model: cards.json schema covering rarity, type, cost and effects.

## Next
3. [Needs design][L] First playable adventure: 3 encounters and a boss.
4. [Needs design][M] Card collection screen and deck builder.
5. [Needs design][M] Save and load (localStorage, versioned).
6. [Needs design][S] In-game feedback button that files GitHub issues (same as Idle Heartwood).

## Done
- 2026-10-24 Project skeleton: index.html with a title screen and a one-card turn stub (GAME_VER 0.0.1).
- 2026-10-24 Smoke test: tests/smoke.cjs and `npm test`, run by a GitHub Action on PRs and pushes to main.
