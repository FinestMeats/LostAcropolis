# Backlog

Statuses: `Ready` (fully specified), `Needs design`, `Blocked (question)`, `Done`.
Sizes: S, M, L. A shift takes one S or M item, or one slice of an L item.

## Now
1. [Needs design][M] Data model spec, in docs/design/data-model.md: the account (shared card collection, account-wide buffs), 5 character slots (each with its own build and equipped cards), card types (weapon, armour, enhancement, consumable, ...), stats, and a versioned save format.
2. [Needs design][M] Character view screen spec: equip slots, how cards are dragged or tapped onto slots, and the stat readout. Mobile layout with a cyberpunk UI style.
3. [Ready][M] Combat prototype (fun check 1): portrait arena, 3 lanes, auto-attack, tap to target, swipe to dodge, 2 enemy types, hidden d20 hit rolls with a visible CRIT burst. Placeholder art, a hard-coded loadout. See docs/design/core-loop.md#combat-the-active-part.
4. [Ready][S] Check node prototype (fun check 3): one skill check with 3 approaches, d20 + stat roll, a dice animation and an outcome.

## Next
5. [Needs design][M] Visual identity: a cyberpunk Greece palette, typography and card frame. Replace the placeholder title screen.
6. [Needs design][L] Character select with 5 slots: create, name and pick a style.
7. [Needs design][L] Character view screen, built from spec 3.
8. [Needs design][L] First playable mission using the core loop.
9. [Needs design][M] Save and load (localStorage, versioned, account plus 5 characters).
10. [Needs design][M] Account-wide progression: buffs and stat boosts that unlock.
11. [Needs design][S] PWA: manifest, icons, offline cache.
12. [Needs design][S] In-game feedback button that files GitHub issues (same as Idle Heartwood).

## Done
- 2026-10-24 Core loop spec: docs/design/core-loop.md (contracts of 3 to 5 nodes, real-time lane combat, d20 checks, 5 stats, equipment cards, Polis Rep account progression).
- 2026-10-24 Project skeleton: index.html with a title screen and a one-card turn stub (GAME_VER 0.0.1).
- 2026-10-24 Smoke test: tests/smoke.cjs and `npm test`, run by a GitHub Action on PRs and pushes to main.
