import { EXPANDED_PACK_CONFIGS } from "./packs/critical-forge-expanded.js";

export const MODULE_ID = "pf2e-critical-forge-arsenal";

const SETTING_LOCALIZATION = Object.freeze({
  enableExpandedSlashingCriticalHits: "ExpandedSlashingCriticalHits",
  enableExpandedPiercingCriticalHits: "ExpandedPiercingCriticalHits",
  enableExpandedBludgeoningCriticalHits: "ExpandedBludgeoningCriticalHits",
  enableExpandedSlashingCriticalFumbles: "ExpandedSlashingCriticalFumbles",
  enableExpandedPiercingCriticalFumbles: "ExpandedPiercingCriticalFumbles",
  enableExpandedBludgeoningCriticalFumbles: "ExpandedBludgeoningCriticalFumbles"
});

export function registerArsenalSettings(onPackSettingChanged) {
  for (const config of EXPANDED_PACK_CONFIGS) {
    const localizationKey = SETTING_LOCALIZATION[config.settingKey];
    game.settings.register(MODULE_ID, config.settingKey, {
      name: `PF2ECFA.Settings.${localizationKey}.Name`,
      hint: `PF2ECFA.Settings.${localizationKey}.Hint`,
      scope: "world",
      config: true,
      type: Boolean,
      default: false,
      onChange: () => onPackSettingChanged?.()
    });
  }
}

export function isArsenalPackEnabled(settingKey) {
  return Boolean(game.settings.get(MODULE_ID, settingKey));
}
