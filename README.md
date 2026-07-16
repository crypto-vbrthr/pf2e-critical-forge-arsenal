# PF2E Critical Forge: Arsenal

A companion module that contributes optional card packs to **PF2E Critical Forge**.

## Requirements

- Foundry Virtual Tabletop 14
- Pathfinder Second Edition
- PF2E Critical Forge 0.8.0-rc.2 or newer

Foundry treats PF2E Critical Forge as a required module dependency and prevents Arsenal from being enabled without it.

## Included packs

**Critical Forge Expanded** currently contains six independent packs:

- Slashing Critical Hits: 5 cards
- Piercing Critical Hits: 5 cards
- Bludgeoning Critical Hits: 5 cards
- Slashing Critical Fumbles: 5 cards
- Piercing Critical Fumbles: 5 cards
- Bludgeoning Critical Fumbles: 5 cards

Each pack is registered separately and remains protected and read-only in the Critical Forge Card Pack Editor. Its active state is controlled through **Configure Settings → Module Settings → PF2E Critical Forge: Arsenal**. Changes are applied immediately and are stored for the current world.

All packs are disabled by default, allowing the GM to choose only the decks wanted for the campaign.

## Development

```bash
npm test
```
