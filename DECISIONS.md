# Decision log

Newest entries go at the bottom. Format: `YYYY-MM-DD | shift/PR | decision | why | how to revert`.

2026-10-24 | setup | Studio runs on a scheduled shift with auto-merge for tested, small changes | Lucas chose it | Change the merge rules in STUDIO.md
2026-10-24 | setup | First commit went straight to main because the repo was empty; every later change goes through a PR | Nothing to branch from | n/a
2026-10-24 | shift/2026-10-24-live-url | Recorded live URL https://finestmeats.github.io/LostAcropolis/ in CLAUDE.md and STUDIO.md | Lucas turned on Pages; the path is case-sensitive | Revert the PR
2026-10-24 | shift/2026-10-24-vision | Vision rewritten from Lucas's answer: cyberpunk future Greece, 5 character slots, account-wide collection and buffs, character equip screen, no party deck | Lucas's direction | Revert the PR
2026-10-24 | shift/2026-10-24-vision | Tech: vanilla JS + ES modules, no build step, PWA target; libraries only when they clearly improve UX | Lucas asked for whatever gives the best UX; this stays fastest on phones | Revert the PR
2026-10-24 | shift/2026-10-24-20-core-loop | Core loop: short contracts (3-5 node routes), real-time 3-lane combat with hidden d20 rolls, d20 skill checks, 5 Greek-named stats, cards as equipment, Polis Rep for account progression | Delivers 'more engaging than a TTRPG' while keeping TTRPG mechanics underneath | Edit docs/design/core-loop.md
