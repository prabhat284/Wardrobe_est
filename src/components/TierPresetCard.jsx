import React from "react";
import { PRESETS } from "../config/presets";
import { TIER_LABELS } from "../config/materialRates";

export function TierPresetCard(props) {
  var design = props.design;
  var setDesign = props.setDesign;

  var tiers = design.tiers;
  var keys = Object.keys(PRESETS);

  function applyPreset(key) {
    var preset = PRESETS[key];
    setDesign(function (prev) {
      return {
        ...prev,
        tiers: {
          shutter: preset.shutter,
          carcass: preset.carcass,
          internal: preset.internal,
          hardware: preset.hardware,
        },
      };
    });
  }

  function isActivePreset(key) {
    var p = PRESETS[key];
    return (
      tiers.shutter === p.shutter &&
      tiers.carcass === p.carcass &&
      tiers.internal === p.internal &&
      tiers.hardware === p.hardware
    );
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
        Pricing profile
      </h2>
      <p className="mt-1 text-xs text-slate-500">
        Switch all materials between Deco / Premium / Luxury.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {keys.map(function (key) {
          var active = isActivePreset(key);
          return (
            <button
              key={key}
              type="button"
              onClick={function () {
                applyPreset(key);
              }}
              className={
                "rounded-full px-3 py-1.5 text-xs font-medium border transition " +
                (active
                  ? "border-indigo-600 bg-indigo-600 text-white shadow-sm"
                  : "border-slate-300 bg-white text-slate-700 hover:border-indigo-400")
              }
            >
              {TIER_LABELS[key]}
            </button>
          );
        })}
      </div>
    </section>
  );
}

