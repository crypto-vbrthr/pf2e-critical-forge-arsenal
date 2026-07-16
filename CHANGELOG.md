# Changelog

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
