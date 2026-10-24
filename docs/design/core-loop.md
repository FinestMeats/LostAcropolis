# Core loop

Status: draft spec, 2026-10-24. Built from the Vision in STUDIO.md.

## Pitch
You're a runner in **Neo-Athens, 2187**: a vertical megacity grown over the old one, with corporate arcologies stacked on the hills and the Acropolis buried under a data spire. You take **contracts**: short, fast missions you play with one thumb. Your character's stats and cards drive everything, and tabletop-style rolls decide the big moments, but you never fill in a sheet. You tap, swipe and react.

## Session shape (3 to 8 minutes)
1. **Hub:** pick a character (one of 5 slots), check the character view, and pick a contract from the district map.
2. **Contract:** a short chain of 3 to 5 **nodes** on a branching route (a map like Slay the Spire's, but quick). Node types:
   - **Fight:** real-time combat, the core of the game (see below). 30 to 60 seconds.
   - **Check:** a TTRPG-style skill challenge such as hacking a door, talking past a guard or climbing a facade. Pick an approach and it rolls d20 + stat against a difficulty, with a flashy dice animation. The result opens or closes routes and changes rewards.
   - **Cache:** loot. Card drops, credits, materials.
   - **Fixer:** a shop or event with choices and trade-offs.
   - **Boss:** a harder fight at the end.
3. **Payout:** the reward screen. New cards go into the account collection, the character gains XP and the account gains **Polis Rep**, which drives account-wide progression.
4. Back to the hub, where you equip new cards and pick the next contract.

## Combat (the active part)
- **Portrait screen.** Your runner is in the lower third and enemies come from the top in up to 3 lanes.
- **Auto-attack** fires at the targeted lane on a timer set by the equipped weapon card. Tap a lane to switch targets.
- **Ability bar:** up to 4 buttons from equipped **enhancement** and **program** cards, each on a cooldown (an overclock burst, an EMP that stuns a lane, a nano-shield, a drone).
- **Dodge:** swipe left or right to sidestep telegraphed attacks. A perfect dodge in a small timing window triggers a free **crit roll**.
- **Rolls in real time:** every hit makes a hidden d20 roll against the enemy's defence (stats add modifiers). A natural 20 is a visible CRIT burst, a 1 is a glancing hit. This keeps the TTRPG feel without slowing play.
- **Heat:** using abilities builds Heat. High Heat boosts damage but lets enemy alarms call reinforcements. This is the risk/reward lever.
- A win drops loot. If you lose, you keep half the loot gathered so far, so a loss is never wasted time.

## Stats (shared by fights and checks)
| Stat | Fights | Checks |
|---|---|---|
| **Kratos** (Strength) | melee damage, HP | force, intimidate |
| **Tachy** (Reflex) | attack speed, dodge window | climb, sneak |
| **Nous** (Intellect) | ability power, cooldowns | hack, analyse |
| **Charis** (Presence) | crit chance, Heat control | persuade, deceive |
| **Bios** (Grit) | armour, healing | endure, resist |

Base stats come from the character's **style** (chosen at creation, such as Street Samurai, Netrunner or Face). Equipped cards add to them, and account buffs add to every character.

## Cards (no deck: they're equipment)
- Every card is an item the account owns. Equipping one on character 1 never removes it from characters 2 to 5.
- **Slots per character:** weapon (1), armour (head, body, legs), enhancements (2, cyberware), programs (2, active abilities), and a mod or charm (1).
- Rarity: Common, Rare, Epic, Mythic. Duplicate drops upgrade the card's level account-wide.

## Progression
- **Character level:** a small stat growth and more slot unlocks (the second program slot, the second enhancement slot).
- **Polis Rep (account):** unlocks account-wide buffs and stat boosts that apply to all characters, such as "+2% crit for all runners", plus new districts, contract tiers and character slots 3 to 5 (slots 1 and 2 are open from the start).
- **Districts:** Plaka Grid (tutorial), Piraeus Docks, Kifisia Arcologies, Exarchia Undercity, Acropolis Spire (endgame).

## Fun checks (what each prototype must prove)
1. A single fight feels good in 30 seconds with no tutorial text.
2. Swapping one card visibly changes how a fight plays.
3. A check roll is a tense, satisfying moment, not a menu.
4. The second character plays differently from the first using the same collection.

## Out of scope for v1
Multiplayer, PvP, real-money shop, gacha. Anything here needs Lucas.
