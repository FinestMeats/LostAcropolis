# App Store checklist (for the future iPhone/iPad build)

Kept for when Lost Acropolis gets an Apple build. Source: a list of 12 common reasons Apple rejects vibe-coded apps (Lucas shared it 2026-11-02), with notes on what each means for this game. Submitting to the App Store always needs Lucas first (STUDIO.md merge rules). Check Apple's current App Review Guidelines before submitting; these change.

## The biggest one for us
- **"Website in a box."** Apple rejects apps that are only a website wrapped in a web view (minimum functionality). Lost Acropolis is a web game, so the iOS build must feel native: proper app icon and launch screen, offline play, haptics on hits and crits, no browser chrome or pull-to-refresh, native share sheet, and ideally Game Center (achievements, leaderboard). Capacitor is the likely wrapper; plan native touches in from the start.

## Money
- **No outside payments for digital items.** Card packs, currency, cosmetics or unlocks bought in the app must use Apple in-app purchase, not Stripe or a web checkout (country rules vary; check current terms).
- **Restore Purchases works.** A visible Restore button that brings back everything bought, on a fresh install and a second device.
- **Paid features must be clear and working.** Say what a purchase gives before the player pays, and make sure it actually unlocks.

## Accounts
- **Sign in with Apple** whenever Google or any other social sign-in is offered.
- **Account deletion inside the app**, not by email: deletes the account and its data.
- **A working demo login** in the review notes if anything sits behind sign-in. Test it the day you submit.

## Content and polish
- **Report and block.** If players can see anything other players write (names on a ladder, chat, guild names), there must be a way to report it and block the player, plus a filter.
- **iPad works.** If the build runs on iPad, every screen must lay out properly there (or ship iPhone-only on purpose).
- **No "coming soon" screens** or placeholder buttons in the submitted build.
- **No broken links.** Privacy policy, terms, support and every in-app link open and load.
- **Screenshots match the build.** Store screenshots and preview video show the current game, not old art.
