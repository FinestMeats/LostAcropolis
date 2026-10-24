# Backlog

Statuses: `Ready` (fully specified), `Needs design`, `Blocked (question)`, `Done`.
Sizes: S, M, L. A shift takes one S or M item, or one slice of an L item.

## Now
1. [Needs design][M] Core loop spec, in docs/design/core-loop.md: what a play session looks like, the active (non-turn-based) moment-to-moment play, how the TTRPG stats and rolls feed into it, and the rewards. Keep it phone-first and engaging.
2. [Needs design][M] Data model spec, in docs/design/data-model.md: the account (shared card collection, account-wide buffs), 5 character slots (each with its own build and equipped cards), card types (weapon, armour, enhancement, consumable, ...), stats, and a versioned save format.
3. [Needs design][M] Character view screen spec: equip slots, how cards are dragged or tapped onto slots, and the stat readout. Mobile layout with a cyberpunk UI style.

## Next
4. [Needs design][M] Visual identity: a cyberpunk Greece palette, typography and card frame. Replace the placeholder title screen.
5. [Needs design][L] Character select with 5 slots: create, name and pick a style.
6. [Needs design][L] Character view screen, built from spec 3.
7. [Needs design][L] First playable mission using the core loop.
8. [Needs design][M] Save and load (localStorage, versioned, account plus 5 characters).
9. [Needs design][M] Account-wide progression: buffs and stat boosts that unlock.
10. [Needs design][S] PWA: manifest, icons, offline cache.
11. [Needs design][S] In-game feedback button that files GitHub issues (same as Idle Heartwood).

## Done
- 2026-10-24 Project skeleton: index.html with a title screen and a one-card turn stub (GAME_VER 0.0.1).
- 2026-10-24 Smoke test: tests/smoke.cjs and `npm test`, run by a GitHub Action on PRs and pushes to main.
