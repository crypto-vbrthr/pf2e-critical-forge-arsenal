# Changelog

## 0.3.8

### Changed

- Completed the Mechanical Review patch for Bludgeoning Critical Hits.
- Reworked **Bone-Rattling Strike** to apply a circumstance penalty to Athletics instead of Enfeebled 1.
- Reworked **Buckled Knee** to penalize Acrobatics and Reflex instead of duplicating another movement-reduction effect.
- Reworked **Folded Defense** to penalize attack rolls instead of Fortitude saves.
- Corrected the fallback title for **Buckled Knee**.
- Preserved all 30 cards, draw weights, and pack structure.

## 0.3.7

### Changed

- Reworked six Piercing Critical Hit cards following the mechanical review.
- Threaded Gap now penalizes Reflex saves instead of duplicating piercing weakness.
- Marked Vital now leaves the target off-guard instead of duplicating piercing weakness.
- Needle's Passage now penalizes Perception instead of duplicating AC and Fortitude penalties.
- Nailed Stride now penalizes Acrobatics and Reflex saves, giving it a distinct supported control effect.
- Shock to the Nerve now applies enfeebled 1 instead of duplicating clumsy 1.
- Breath-Stealing Thrust now penalizes Fortitude and Will saves instead of duplicating Breathless Focus.

### Fixed

- Corrected fallback titles for Needle's Passage and Nailed Stride.

## 0.3.6

### Fixed

- Updated all Arsenal card effect definitions to Effect Schema 2 for compatibility with Critical Forge 0.9.0-dev.
- Added component-level one-round durations to Rending Strike, Red Rhythm, and Bleeding Distraction.
- Replaced unsupported `rollOption` components that prevented extension-pack registration.
- Corrected Scarlet Feint so its mechanical effect matches its Reflex-penalty description.

### Changed

- Severed Momentum now reduces all Speeds by 10 feet for 1 round.
- Tendon Snag now imposes a -1 circumstance penalty to Acrobatics and Reflex saves for 1 round.

## v0.3.5
- Mechanical review patch for Slashing Critical Hits.
- Reworked duplicate cards.
- Updated bleeding cards.
- Fixed mixed-duration designs.

# Changelog

## 0.3.4

- Added five cards to each of the six core weapon packs.
- Completed the initial core collection at 30 cards per pack and 180 cards total.
- Added complete English and German localization for all new cards.
- Preserved all existing pack and card identifiers.

## 0.3.4

- Added five new cards to each of the six core weapon packs.
- Expanded every core pack from 20 to 25 cards.
- Increased the total card count from 120 to 150.
- Added complete German and English localization for all new cards.
- Preserved all existing card and pack IDs.

## 0.3.2

- Added the third five-card expansion block to all six weapon packs.
- Each pack now contains 20 cards, for a total of 120 cards.
- Added English and German localization for all 30 new cards and effects.
- Expanded tactical movement, sensory disruption, exposed-defense, precision, recoil, and recovery themes.
- Updated pack-setting hints so they no longer refer to the original five-card size.
- Preserved all existing card and pack IDs.


## 0.3.1

- Added the second five-card expansion block to all six weapon packs.
- Each pack now contains 15 cards, for a total of 90 cards.
- Added English and German localization for all 30 new cards and effects.
- Continued the distinct slashing, piercing, and bludgeoning identities defined by the Card Bible.
- Preserved all existing card and pack IDs.


## 0.3.0

- Added the first five-card expansion block to all six weapon packs.
- Each pack now contains 10 cards, for a total of 60 cards.
- Added English and German localization for all 30 new cards and effects.
- Preserved all existing card and pack IDs.


## 0.2.2

- Translated the Card Bible into English.
- Standardized all project documentation on English while retaining German and English runtime localization.

## 0.2.1

- Added the Arsenal Card Bible as the binding design guide for expanding every pack to 30 cards.
- Defined damage-type identity, impact distribution, effect budgets, duration rules, filters, tags, naming conventions, localization standards, excluded designs, and a review checklist.
- Documented the target scope of 180 cards across the first six weapon packs.

## 0.2.0

- Added three independently selectable weapon-fumble packs for slashing, piercing, and bludgeoning attacks.
- Added 15 localized critical-fumble cards with source-side effects.
- Added fumble effects for off-guard, attack and AC penalties, clumsy, enfeebled, dazzled, slowed, movement penalties, Reflex penalties, and prone.
- Generalized the Expanded card factory to support both critical-hit and critical-fumble categories while preserving all existing card and pack ids.
- Expanded settings, startup, localization, and Critical Forge validator coverage to all six packs and 30 cards.

## 0.1.3

- Fixed Arsenal settings registration in Foundry VTT by using the supported `Boolean` setting type.
- Restored registration and visibility of all three Critical Forge Expanded packs.
- Added a regression test that rejects the unsupported `BooleanField` setting declaration.

## 0.1.2

- Fixed startup ordering when Critical Forge publishes its extension API during the `init` hook before Arsenal has registered its world settings.
- Arsenal now stores the extension controller first and registers its packs only after its settings are available.
- Added structural coverage for the deferred-registration guard.

## 0.1.1

- Split Critical Forge Expanded weapon criticals into three independently registered packs for slashing, piercing, and bludgeoning damage.
- Added world settings for enabling or disabling every Arsenal pack separately.
- Pack-setting changes now replace the registered definitions immediately without requiring a world reload.
- Preserved all 0.1.0 card ids so redraw history and exported references remain stable.
- Added localization and validation coverage for the new pack-selection settings.

## 0.1.0

- Added the first real Critical Forge Expanded card block.
- Added five slashing, five piercing, and five bludgeoning critical-hit cards.
- Added localized German and English titles, descriptions, and effect names.
- Added structured effects for conditions, movement penalties, modifiers, weaknesses, persistent bleed damage, and a source-side defensive benefit.
- Split card data into damage-type files and introduced a reusable card factory.
- Expanded structural validation to cover all 15 cards and both localization files.

## 0.0.4

- Rebuilt the extension pack against the actual Critical Forge 0.8.0-rc.2 schema.
- Added the first fully valid localized test card and Effect Engine effect.
- Removed the duplicate `ready` fallback registration path.
- Added validation against Critical Forge's own pack and effect validators.

## 0.0.3

- Added the initial registration test card.

## 0.0.2

- Empty development packs are skipped instead of being submitted to the Critical Forge validator.
- Registration errors are caught without unhandled promise rejections.

## 0.0.1

- Initial module scaffold.
