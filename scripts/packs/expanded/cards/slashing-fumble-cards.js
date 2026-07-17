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
      components: [{ type: "modifier", selector: "perception", value: -1, modifierType: "circumstance", predicate: [] }]
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
      "The weapon turns awkwardly in the grip, imposing a -1 circumstance penalty to Reflex saves for 1 round.",
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
    fallbackDescription: "The sweeping weapon, cloak, or debris crosses the attacker's vision, imposing a -1 circumstance penalty to Will saves for 1 round.",
    weight: 1,
    tags: ["control", "senses"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "will", value: -1, modifierType: "circumstance", predicate: [] }] }
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
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "clumsy", value: 1 }, { type: "modifier", selector: "athletics", value: -1, modifierType: "circumstance", predicate: [] }] }
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
    fallbackDescription: "The wide miss exposes the attacker's side, imposing a -1 circumstance penalty to Perception checks for 1 round.",
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
    fallbackDescription: "Weapon, clothing, and momentum knot together, imposing a -1 circumstance penalty to Acrobatics checks for 1 round.",
    weight: 1, tags: ["movement"], filters: { excludedSourceTraits: ["incorporeal"] },
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "acrobatics", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.empty-arc", localizationKey: "EmptyArc", damageType: "slashing",
    tone: "neutral", impact: "light", fallbackTitle: "Empty Arc",
    fallbackDescription: "The blade cuts only air and leaves the attacker off balance, imposing a -1 circumstance penalty to Athletics checks for 1 round.",
    weight: 2, tags: ["control"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "off-guard" }] }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.dragged-edge", localizationKey: "DraggedEdge", damageType: "slashing",
    tone: "serious", impact: "moderate", fallbackTitle: "Grounded Blade",
    fallbackDescription: "The edge catches ground, wall, or debris and drags the attacker out of rhythm, reducing all Speeds by 10 feet for 1 round.",
    weight: 1, tags: ["movement", "recovery"],
    effect: { duration: ONE_ROUND, components: [{ type: "movement", movementType: "all", value: -10, modifierType: "circumstance" }] }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.opened-center", localizationKey: "OpenedCenter", damageType: "slashing",
    tone: "serious", impact: "moderate", fallbackTitle: "Opened Center",
    fallbackDescription: "The overwide swing exposes the attacker's centerline, imposing a -1 circumstance penalty to AC and Reflex saves for 1 round.",
    weight: 1, tags: ["defense", "debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["ac", "reflex"], value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.wrenched-shoulder", localizationKey: "WrenchedShoulder", damageType: "slashing",
    tone: "serious", impact: "strong", fallbackTitle: "Wrenched Shoulder",
    fallbackDescription: "The failed cut wrenches the attacker's shoulder, leaving them enfeebled 1 and imposing a -1 circumstance penalty to attack rolls for 1 round.",
    weight: 1, tags: ["debuff", "recovery"], filters: { excludedSourceTraits: ["construct", "elemental", "incorporeal", "ooze", "undead"] },
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "athletics", value: -1, modifierType: "circumstance", predicate: [] }, { type: "modifier", selector: "attack-roll", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.flash-of-steel", localizationKey: "FlashOfSteel", damageType: "slashing",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Flash of Steel",
    fallbackDescription: "A wild reflection or burst of debris crosses the attacker's sight, leaving them dazzled for 1 round.",
    weight: 1, tags: ["senses", "recovery"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "dazzled" }] }
  })
,
  defineWeaponFumbleCard({
    id: "slashing-fumble.dragged-by-the-edge",
    localizationKey: "DraggedByTheEdge",
    damageType: "slashing",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Dragged by the Edge",
    fallbackDescription: "The missed swing keeps pulling after the target is gone, leaving the attacker off-guard and reducing their land Speed by 5 feet for 1 round.",
    weight: 1,
    tags: ["control", "movement"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "condition",
          "slug": "off-guard"
        },
        {
          "type": "movement",
          "movementType": "land",
          "value": -5,
          "modifierType": "circumstance"
        }
      ]
    }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.nicked-guard",
    localizationKey: "NickedGuard",
    damageType: "slashing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Nicked Guard",
    fallbackDescription: "The edge catches the attacker’s own guard or equipment, imposing a -1 circumstance penalty to AC and Reflex saves for 1 round.",
    weight: 1,
    tags: ["defense", "debuff"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "modifier",
          "selector": [
            "ac",
            "reflex"
          ],
          "value": -1,
          "modifierType": "circumstance",
          "predicate": []
        }
      ]
    }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.wild-recovery",
    localizationKey: "WildRecovery",
    damageType: "slashing",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Wild Recovery",
    fallbackDescription: "The attacker wrenches the weapon back into line, becoming clumsy 1 for 1 round.",
    weight: 2,
    tags: ["recovery", "debuff"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "condition",
          "slug": "clumsy",
          "value": 1
        }
      ]
    }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.blinded-by-the-arc",
    localizationKey: "BlindedByTheArc",
    damageType: "slashing",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Blinded by the Arc",
    fallbackDescription: "The broad miss whips dust, cloth, or debris across the attacker’s vision, leaving them dazzled for 1 round.",
    weight: 1,
    tags: ["senses"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "condition",
          "slug": "dazzled"
        }
      ]
    }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.spent-momentum",
    localizationKey: "SpentMomentum",
    damageType: "slashing",
    tone: "serious",
    impact: "strong",
    fallbackTitle: "Spent Momentum",
    fallbackDescription: "The full force of the swing is wasted, leaving the attacker enfeebled 1 and imposing a -1 circumstance penalty to attack rolls for 1 round.",
    weight: 1,
    tags: ["debuff", "recovery"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "condition",
          "slug": "enfeebled",
          "value": 1
        },
        {
          "type": "modifier",
          "selector": "reflex",
          "value": -1,
          "modifierType": "circumstance",
          "predicate": []
        }
      ]
    }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.overcut-opening",
    localizationKey: "OvercutOpening",
    damageType: "slashing",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Overcut Opening",
    fallbackDescription: "The swing travels too far and leaves the attacker off-guard for 1 round.",
    weight: 2,
    tags: ["control"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "off-guard" }] }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.grounded-blade",
    localizationKey: "GroundedBlade",
    damageType: "slashing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Dragged Edge",
    fallbackDescription: "The blade drags across ground or obstruction, imposing a -1 circumstance penalty to attack rolls for 1 round.",
    weight: 1,
    tags: ["debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "attack-roll", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.tangled-footwork",
    localizationKey: "TangledFootwork",
    damageType: "slashing",
    tone: "neutral",
    impact: "moderate",
    fallbackTitle: "Tangled Footwork",
    fallbackDescription: "The failed arc tangles stance and stride, reducing all Speeds by 10 feet for 1 round.",
    weight: 1,
    tags: ["movement", "control"],
    effect: { duration: ONE_ROUND, components: [{ type: "movement", movementType: "all", value: -10, modifierType: "circumstance" }] }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.jarred-shoulder",
    localizationKey: "JarredShoulder",
    damageType: "slashing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Jarred Shoulder",
    fallbackDescription: "The abrupt stop jars the attacker’s shoulder, imposing a -1 circumstance penalty to Athletics checks for 1 round.",
    weight: 1,
    tags: ["debuff"],
    filters: { excludedTargetTraits: ["construct", "elemental", "incorporeal", "ooze", "undead"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "enfeebled", value: 1 }] }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.whirling-exposure",
    localizationKey: "WhirlingExposure",
    damageType: "slashing",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Whirling Exposure",
    fallbackDescription: "Momentum spins the attacker out of position, leaving it off-guard and imposing a -1 circumstance penalty to Reflex saves for 1 round.",
    weight: 1,
    tags: ["control", "debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "off-guard" }, { type: "modifier", selector: "reflex", value: -1, modifierType: "circumstance", predicate: [] }] }
  })
]);
