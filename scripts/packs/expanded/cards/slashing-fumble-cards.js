import {
  defineWeaponFumbleCard,
  DURATIONS
} from "../card-factory.js";

const { ONE_ROUND } = DURATIONS;

export const SLASHING_FUMBLE_CARDS = Object.freeze([
  defineWeaponFumbleCard({
    id: "slashing-fumble.overdrawn-arc",
    localizationKey: "OverdrawnArc",
    damageType: "slashing",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Overdrawn Arc",
    fallbackDescription:
      "The missed cut travels too far and leaves the attacker off-guard for 1 round.",
    weight: 2,
    tags: ["control"],
    effect: {
      duration: ONE_ROUND,
      components: [{ type: "condition", slug: "off-guard" }]
    }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.twisted-edge",
    localizationKey: "TwistedEdge",
    damageType: "slashing",
    tone: "serious",
    impact: "light",
    fallbackTitle: "Twisted Edge",
    fallbackDescription:
      "The weapon turns awkwardly in the grip, imposing a -1 circumstance penalty to attack rolls for 1 round.",
    weight: 2,
    tags: ["debuff"],
    effect: {
      duration: ONE_ROUND,
      components: [{
        type: "modifier",
        selector: "attack-roll",
        value: -1,
        modifierType: "circumstance",
        predicate: []
      }]
    }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.open-flank",
    localizationKey: "ArsenalOpenFlank",
    damageType: "slashing",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Open Flank",
    fallbackDescription:
      "The sweeping miss carries the guard aside, imposing a -1 circumstance penalty to AC for 1 round.",
    weight: 1,
    tags: ["defense", "debuff"],
    effect: {
      duration: ONE_ROUND,
      components: [{
        type: "modifier",
        selector: "ac",
        value: -1,
        modifierType: "circumstance",
        predicate: []
      }]
    }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.tangled-follow-through",
    localizationKey: "TangledFollowThrough",
    damageType: "slashing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Tangled Follow-Through",
    fallbackDescription:
      "Weapon, clothing, and footwork disagree at once, leaving the attacker clumsy 1 for 1 round.",
    weight: 1,
    tags: ["control"],
    filters: {
      excludedSourceTraits: ["incorporeal"]
    },
    effect: {
      duration: ONE_ROUND,
      components: [{ type: "condition", slug: "clumsy", value: 1 }]
    }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.lost-tempo",
    localizationKey: "SlashingLostTempo",
    damageType: "slashing",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Lost Tempo",
    fallbackDescription:
      "The failed cut consumes the attacker's rhythm, leaving them slowed 1 for 1 round.",
    weight: 1,
    tags: ["control"],
    effect: {
      duration: ONE_ROUND,
      components: [{ type: "condition", slug: "slowed", value: 1 }]
    }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.slippery-grip",
    localizationKey: "SlipperyGrip",
    damageType: "slashing",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Slippery Grip",
    fallbackDescription: "The hilt shifts at the worst moment, imposing a -1 circumstance penalty to Athletics checks and attack rolls for 1 round.",
    weight: 2,
    tags: ["debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["athletics", "attack-roll"], value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.wild-follow-through",
    localizationKey: "WildFollowThrough",
    damageType: "slashing",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Wild Follow-Through",
    fallbackDescription: "The cut pulls the attacker into a sprawling recovery, reducing all Speeds by 5 feet for 1 round.",
    weight: 1,
    tags: ["movement"],
    filters: {"excludedSourceTraits": ["incorporeal"]},
    effect: { duration: ONE_ROUND, components: [{ type: "movement", movementType: "all", value: -5, modifierType: "circumstance" }] }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.blinded-by-motion",
    localizationKey: "BlindedByMotion",
    damageType: "slashing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Blinded by Motion",
    fallbackDescription: "The sweeping weapon, cloak, or debris crosses the attacker's vision, leaving them dazzled for 1 round.",
    weight: 1,
    tags: ["control", "senses"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "dazzled" }] }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.cut-short",
    localizationKey: "CutShort",
    damageType: "slashing",
    tone: "serious",
    impact: "light",
    fallbackTitle: "Cut Short",
    fallbackDescription: "The failed swing jars the attacker's rhythm, imposing a -1 circumstance penalty to Reflex saves for 1 round.",
    weight: 2,
    tags: ["debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "reflex", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.spinning-recovery",
    localizationKey: "SpinningRecovery",
    damageType: "slashing",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Spinning Recovery",
    fallbackDescription: "The missed arc leaves the attacker dizzy and exposed, making them clumsy 1 and off-guard for 1 round.",
    weight: 1,
    tags: ["control", "debuff"],
    filters: {"excludedSourceTraits": ["incorporeal"]},
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "clumsy", value: 1 }, { type: "condition", slug: "off-guard" }] }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.kissed-the-floor", localizationKey: "KissedTheFloor", damageType: "slashing",
    tone: "dramatic", impact: "strong", fallbackTitle: "Kissed the Floor",
    fallbackDescription: "The blade bites ground or debris and drags the attacker down, knocking them prone.",
    weight: 1, tags: ["control", "melee"], filters: { attackTraits: ["melee"], excludedSourceTraits: ["incorporeal"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "prone" }] }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.exposed-side", localizationKey: "ExposedSide", damageType: "slashing",
    tone: "serious", impact: "light", fallbackTitle: "Open Flank",
    fallbackDescription: "The wide miss exposes the attacker's side, leaving them off-guard for 1 round.",
    weight: 2, tags: ["defense", "control"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "off-guard" }] }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.snagged-edge", localizationKey: "SnaggedEdge", damageType: "slashing",
    tone: "neutral", impact: "moderate", fallbackTitle: "Snagged Edge",
    fallbackDescription: "The edge catches on armor, scenery, or its own path, leaving the attacker clumsy 1 for 1 round.",
    weight: 1, tags: ["debuff"], filters: { excludedSourceTraits: ["incorporeal"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "clumsy", value: 1 }] }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.lost-line", localizationKey: "LostLine", damageType: "slashing",
    tone: "serious", impact: "light", fallbackTitle: "Lost Line",
    fallbackDescription: "The failed arc ruins the attacker's line, imposing a -1 circumstance penalty to attack rolls and AC for 1 round.",
    weight: 2, tags: ["debuff", "defense"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["attack-roll", "ac"], value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.tangled-recovery", localizationKey: "TangledRecovery", damageType: "slashing",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Tangled Recovery",
    fallbackDescription: "Weapon, clothing, and momentum knot together, reducing all Speeds by 10 feet for 1 round.",
    weight: 1, tags: ["movement"], filters: { excludedSourceTraits: ["incorporeal"] },
    effect: { duration: ONE_ROUND, components: [{ type: "movement", movementType: "all", value: -10, modifierType: "circumstance" }] }
  })
]);
