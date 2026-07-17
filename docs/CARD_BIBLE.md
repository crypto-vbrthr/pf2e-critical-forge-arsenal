# Card Bible

This document defines the binding design rules for cards in **PF2E Critical Forge: Arsenal**. Its purpose is to keep large packs varied, readable, compatible with PF2e, and technically maintainable.

## 1. Target Scope

Each regular Arsenal pack should eventually contain **30 cards**.

The first six target packs are:

| Pack | Target Size |
|---|---:|
| Slashing Critical Hits | 30 |
| Piercing Critical Hits | 30 |
| Bludgeoning Critical Hits | 30 |
| Slashing Critical Fumbles | 30 |
| Piercing Critical Fumbles | 30 |
| Bludgeoning Critical Fumbles | 30 |
| **Total** | **180** |

Thirty cards is a content target, not a schema requirement. Packs under development may contain fewer cards, but they must still pass all validation.

## 2. Damage-Type Identity

Each damage type has its own mechanical and narrative character.

### Slashing

Primary themes:

- bleeding and open wounds
- torn defenses
- damaged straps, clothing, or superficial protection
- sweeping motions and follow-through
- reduced mobility caused by cuts

Slashing cards should rarely focus primarily on knockback or heavy disorientation. Those themes belong mostly to bludgeoning damage.

### Piercing

Primary themes:

- precise hits
- joints, hands, shoulders, and movement patterns
- gaps in armor
- targeted impairment of a specific function
- small but tactically meaningful disadvantages

Piercing cards should feel controlled and precise rather than broad or brutal.

### Bludgeoning

Primary themes:

- balance and footing
- knockback, falls, and positional control
- disorientation and shaken perception
- displaced defenses
- lost grip and broken rhythm

Bludgeoning cards should convey mass and momentum without repeating the same prone combination over and over.

## 3. Distribution Within a 30-Card Pack

Each complete pack should roughly contain the following mix:

| Effect Type | Guideline |
|---|---:|
| One condition or simple modifier | 8 |
| Combination of two minor effects | 7 |
| Movement, position, or reaction effect | 5 |
| Persistent damage, weakness, or special injury | 4 |
| Situational special effect | 4 |
| Rare highlight card | 2 |

These values are guardrails rather than rigid quotas. Deviations are allowed when they strengthen the identity of the pack.

## 4. Impact Levels

Each card uses exactly one existing impact level:

- `light`
- `moderate`
- `strong`

Recommended distribution per pack:

| Impact | Cards | Default Weight |
|---|---:|---:|
| `light` | 12 | 2 |
| `moderate` | 12 | 2 |
| `strong` | 6 | 1 |

This keeps strong results less common without requiring special draw logic.

### Light

Typical scope:

- one minor condition
- a `-1` circumstance penalty to a narrowly defined selector
- `-5 feet` to one movement type
- a small, clearly bounded tactical disadvantage

### Moderate

Typical scope:

- two minor effects
- one condition with meaningful tactical impact
- `-1` to several closely related selectors
- weakness 2 for 1 round
- a positional or control effect with a clear limitation

### Strong

Typical scope:

- persistent damage
- `slowed 1` for a short duration
- falling prone or a meaningful positional change
- a rare combination that can shape the encounter

Strong cards may stand out, but they must not turn an ordinary critical hit into an automatic victory.

## 5. Duration

The standard duration is **1 round, until the end of the affected creature's turn**, represented by `DURATIONS.ONE_ROUND`.

Use other durations only when the effect requires them:

- `UNLIMITED` only for persistent damage or effects with their own ending condition
- longer round-based durations only for very mild effects
- no permanent loss of attributes or equipment

A card should state its duration explicitly in the description unless PF2e already defines the duration unambiguously.

## 6. Critical Hits and Critical Fumbles

### Critical Hits

- Effects target `target` by default.
- The attacker may receive a small follow-up benefit only in special cases.
- Avoid additional direct weapon damage because the critical hit already doubles damage.

### Critical Fumbles

- Effects target `source` by default.
- Fumbles should be embarrassing, dangerous, or tactically relevant, but should not routinely erase an entire turn.
- Self-damage should be rare and minor.
- Avoid weapon destruction, permanent loss, or severe disarming without counterplay.

## 7. Conditions and Modifiers

Preferred conditions:

- `off-guard`
- `clumsy`
- `enfeebled`
- `dazzled`
- `slowed`
- `prone`

Rules:

- Valued conditions should normally be limited to value 1.
- `slowed 1` is a strong effect and should remain rare.
- `stunned`, `paralyzed`, `unconscious`, `dying`, `doomed`, and similarly severe conditions are excluded from regular Arsenal cards.
- Modifiers should usually use the `circumstance` type.
- A `-2` modifier is a strong exception and must be tightly limited.
- Bonuses should be rarer than penalties and must have a clear narrative justification.

## 8. Persistent Damage, Weaknesses, and Resistance

### Persistent Damage

- Use only when the damage type and narrative support it.
- A typical strong-card value is approximately `2d4` persistent damage.
- Persistent bleed damage requires exclusions for creatures that plausibly cannot bleed.

Typical bleed exclusions:

```js
["construct", "elemental", "incorporeal", "ooze", "undead"]
```

### Weaknesses

- Usually value 2 for 1 round.
- Must arise naturally from the card's fiction.
- Do not create loops in which a card disproportionately multiplies its own effect.

### Resistance and Immunity

- Use rarely, usually as a small reward for the attacker.
- Do not grant broad immunity to central game mechanics.

## 9. Movement and Position

Movement effects should change the scene rather than merely adjust numbers.

Common allowed effects:

- `-5 feet` to all movement speeds
- a Step or a small amount of forced movement
- loss of stable footing
- `prone` when clearly appropriate for bludgeoning damage

Avoid:

- long-distance forced movement without checking size or environment
- teleportation without a magical context
- effects that conflict logically with flying, swimming, or burrowing

Use filters or deliberately general wording where necessary.

## 10. Filters and Creature Suitability

Every card must be checked for whether its effect makes sense on unusual creatures.

Available filters include:

- `excludedTargetTraits`
- `excludedSourceTraits`
- `targetTraits`
- `sourceTraits`
- `weaponGroups`
- `attackTraits`

Common reasons for exclusions:

- bleeding effects against constructs or undead
- muscle or joint injuries against oozes
- breathing effects against creatures without normal respiration
- grip or hand effects against incorporeal creatures

Use filters selectively. A heavily filtered pack can become unusably small at the table.

## 11. Titles and Descriptions

### Titles

- ideally 2 to 5 words
- vivid but understandable
- no bare rules labels such as "Attack Penalty 1"
- unique within the pack
- German and English titles should convey the same core idea, but do not need to be literal translations

### Descriptions

- 1 to 2 short sentences
- narrative cause first, clear mechanical effect second
- state the condition, value, and duration explicitly
- avoid ambiguous wording that creates extra rules work for the GM

Example:

> The cut disrupts the rhythm of the defense. The target takes a –1 circumstance penalty to attack rolls and Reflex saves for 1 round.

## 12. Tone

Allowed values:

- `neutral`
- `serious`
- `dramatic`

Recommended distribution per pack:

- 8 neutral
- 14 serious
- 8 dramatic

The writing may be colorful, but it should not drift into splatter, slapstick, or modern meme language. Arsenal should work in both heroic fantasy and darker campaigns.

## 13. Tags

Tags support future search, analysis, and possible draw logic. Write them in lowercase English `kebab-case`.

Automatically assigned base tags:

- `weapon`
- `critical-hit` or `critical-fumble`
- `slashing`, `piercing`, or `bludgeoning`

Preferred controlled vocabulary:

- `attack`
- `armor`
- `balance`
- `bleed`
- `control`
- `debuff`
- `defense`
- `equipment`
- `grip`
- `movement`
- `persistent-damage`
- `position`
- `reaction`
- `self-buff`
- `senses`
- `vulnerability`

New tags are allowed when no existing tag fits. Do not use parallel synonyms such as `move`, `mobility`, and `movement`.

## 14. IDs and Localization

Card IDs are immutable after release.

Schema:

```text
pf2e-critical-forge-arsenal.expanded.<damage-type>.<card-slug>
```

Example:

```text
pf2e-critical-forge-arsenal.expanded.slashing.opening-in-the-guard
```

Rules:

- English `kebab-case` only
- no version number in the ID
- never reuse a deleted ID for a different card
- existing IDs remain stable after renaming or text corrections

Use unique `PascalCase` values for `localizationKey`.

Fallback titles and descriptions remain in English so cards stay understandable when localization is missing.

## 15. Mechanical Uniqueness

Two cards are too similar when they differ only by:

- a different title applied to the same effect
- the same effect with a minimally altered duration
- the same selector with only different narrative wording
- the same condition with an insignificantly different fictional cause

A complete pack should contain no mechanical duplicates. Recurring basic elements are acceptable when the combination or tactical role is clearly different.

## 16. Highlight Cards

Each 30-card pack may contain approximately two rare highlight cards.

They should:

- create a small scene
- strongly match the damage type
- remain mechanically clear
- use weight 1
- not automatically be stronger than every other card

Suitable themes include:

- loss of a reaction
- a small free Step
- knockback or falling prone under clear conditions
- a briefly opened weakness
- a special interaction with environment or stance

Purely narrative environmental destruction may be described, but it must not force rules that are not represented mechanically.

## 17. Excluded Designs

Regular Arsenal cards do not use:

- instant death
- additional critical hits
- permanent loss of attributes, limbs, or equipment
- blanket incapacitation
- severe control lasting multiple rounds
- effects that function only through house rules
- sexual, degrading, or excessively graphic content
- results that work only against humanoid anatomy without appropriate filters

## 18. Development Workflow

Add new cards in blocks of five whenever practical.

For each block:

1. Define the mechanical roles.
2. Check for duplicates against existing cards.
3. Add German and English text.
4. Verify filters and effect targets.
5. Run the validators.
6. Confirm that the cards appear correctly in the Foundry editor.
7. Perform at least one practical draw-and-apply test.

## 19. Review Checklist

Every card must satisfy all of the following before inclusion:

- [ ] Does the card clearly fit its damage type?
- [ ] Is it mechanically distinct from existing cards?
- [ ] Are category and effect target correct?
- [ ] Are effect, value, and duration clear in the text?
- [ ] Does the strength match the selected `impact`?
- [ ] Is the weight appropriate?
- [ ] Are all necessary trait exclusions present?
- [ ] Does the card use controlled tags?
- [ ] Are the ID and localization key unique?
- [ ] Are German and English texts complete?
- [ ] Does the card pass every validator?

## 20. Conflict Priority

When requirements conflict, use this order of priority:

1. technical validity
2. clear and fair mechanics
3. damage-type identity
4. uniqueness within the pack
5. narrative impact

Elegant prose must never conceal an unclear rule. A card should ignite at the table, not require a miniature courtroom first.
