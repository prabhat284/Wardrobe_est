import React from "react";

export function CarcassCard(props) {
  var design = props.design;
  var setDesign = props.setDesign;

  var carcass = design.carcass;

  function update(field, value) {
    setDesign(function (prev) {
      return {
        ...prev,
        carcass: {
          ...prev.carcass,
          [field]: value,
        },
      };
    });
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
        Carcass
      </h2>
      <p className="mt-1 text-xs text-slate-500">
        Base structure material and internal finish.
      </p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Material
          </label>
          <select
            value={carcass.material}
            onChange={function (e) {
              update("material", e.target.value);
            }}
            className="w-full rounded-md border border-slate-300 bg-white px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="hdhmr">HDHMR</option>
            <option value="bwp_ply">BWP Ply</option>
            <option value="bwr_ply">BWR Ply</option>
            <option value="mdf">MDF</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Back panel
          </label>
          <select
            value={carcass.backPanelType}
            onChange={function (e) {
              update("backPanelType", e.target.value);
            }}
            className="w-full rounded-md border border-slate-300 bg-white px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="ply_6mm">6mm Ply</option>
            <option value="ply_9mm">9mm Ply</option>
            <option value="hdhmr_8mm">8mm HDHMR</option>
          </select>
        </div>
      </div>
    </section>
  );
}

