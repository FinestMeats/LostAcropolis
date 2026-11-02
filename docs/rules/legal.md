# Legal and player-trust rules

Added 2026-11-02. Read before adding assets, collecting any data, adding random rewards, prices or sign-in, or shipping a new screen.
Not legal advice; when a rule triggers, flag it to Lucas in QUESTIONS.md before shipping.

1. **Every asset has a licence on record.** Art, fonts, sounds, music, icons and code snippets go in `CREDITS.md` with source, author, licence and link, in the same PR that adds them. Only use licences that allow commercial use and modification (CC0, CC-BY with credit, OFL for fonts, MIT/Apache for code). No ripped assets from other games, no "found it on Google", no AI-generated imitations of a known character or brand.
2. **Collect the minimum.** No analytics, ad or tracking SDKs without Lucas, and if one is ever added, session recording/replay and any non-essential tracking stay off until the player opts in (no pre-ticked boxes). Idle Heartwood's `privacy.html` and `terms.html` are the starting templates for this game's pages. Anything that collects personal data (sign-in, email, feedback text, device info) needs, before it ships: a plain-English privacy policy page, a way for players to delete their account and data, and a line in QUESTIONS.md for Lucas.
3. **Assume kids may play.** Don't ask for age, real names, photos or location. Any player-to-player text (names on a ladder, chat) gets length caps and a filter.
4. **No dark patterns.** No fake timers or fake scarcity, no confirm-shaming, no pre-ticked boxes, nothing that makes leaving or deleting harder than joining. Odds for any random reward (packs, chests, crits that matter) are shown in-game.
5. **Honest numbers.** Prices shown in AUD including GST, with no fees added at checkout. No fake reviews, player counts or ratings, and no claims the game can't back up. (Monetization still needs Lucas first.)
6. **Accessibility basics.** Text contrast of at least 4.5:1, tap targets at least 44px, labels on icon-only buttons, and nothing that relies on colour alone (a CRIT also gets a word or shape). Respect `prefers-reduced-motion` for screen shake and flashes.
7. **Who runs it.** Once the game collects data or takes money, an About/contact page names the business (with ABN) and a support email, alongside the privacy policy and terms.
