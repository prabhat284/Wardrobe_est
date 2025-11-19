import React from "react";

export function HardwareCard(props) {
  var design = props.design;
  var setDesign = props.setDesign;

  var hw = design.hardware;

  function update(field, value) {
    setDesign(function (prev) {
      return {
        ...prev,
        hardware: {
          ...prev.hardware,
          [field]: value,
        },
      };
    });
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
        Hardware
      </h2>
      <p className="mt-1 text-xs text-slate-500">
        Hinges, drawer channels, sliding system, locks, handle family.
      </p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Hinge model
          </label>
          <select
            value={hw.hingeModel}
            onChange={function (e) {
              update("hingeModel", e.target.value);
            }}
            className="w-full rounded-md border border-slate-300 bg-white px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="normal">Normal</option>
            <option value="softclose_std">Soft-close (STD)</option>
            <option value="blum">Blum / Hettich</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Drawer channels
          </label>
          <select
            value={hw.drawerChannelModel}
            onChange={function (e) {
              update("drawerChannelModel", e.target.value);
            }}
            className="w-full rounded-md border border-slate-300 bg-white px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="roller">Roller</option>
            <option value="telescopic_sc">Telescopic soft-close</option>
            <option value="undermount_sc">Under-mount soft-close</option>
          </select>
        </div>
      </div>
    </section>
  );
}

