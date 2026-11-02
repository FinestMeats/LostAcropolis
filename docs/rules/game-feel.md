# Game-feel rules

Added 2026-11-02. Read before building or changing any screen.
Small details that make it feel like a premium app, not a web page. Apply them as screens get built.

1. **Instant response.** Taps act immediately (equip a card, the stat readout changes at once) and save in the background. Never make the player wait on a save.
2. **Undo instead of "Are you sure?"** for reversible actions (unequip, salvage, move a card): do it, then show a few-second toast with Undo. Keep confirms for things that can't be undone.
3. **Interruptible animations.** Every animation can be tapped through or reversed mid-way (card flips, menus, screen changes); input is never locked while something animates, except the moment a combat hit resolves.
4. **Forgiving touch targets.** Hit areas bigger than the art (at least 44px, more for combat lanes and dodge swipes), so a thumb near a button counts.
5. **Sheets, not pop-ups.** Card details and the equip picker slide up from the bottom and close with a swipe down or a tap outside. On Android the back gesture closes the open sheet before it leaves a screen.
6. **Smooth screen changes.** Use the View Transitions API (with a plain fallback) so the card the player tapped grows into its detail view.
7. **Numbers that don't jiggle.** Stats, damage, timers and currency use `font-variant-numeric: tabular-nums`.
8. **Clean edges.** Safe-area insets on every screen edge (notch, home bar); card names and headings use `text-wrap: balance`; card frames get smooth rounded corners.
9. **No blank waits.** Show a card-shaped placeholder while art loads, and once the PWA cache exists, serve from it first and refresh in the background.
