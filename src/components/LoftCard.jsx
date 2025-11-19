import React from "react";

export function LoftCard(props) {
  var design = props.design;
  var setDesign = props.setDesign;

  var loft = design.loft;

  function update(field, value) {
    setDesign(function (prev) {
      return {
        ...prev,
        loft: {
          ...prev.loft,
          [field]: value,
        },
      };
    });
  }

  function updateShutters(field, value) {
    setDesign(function (prev) {
      return {
        ...prev,
        loft: {
          ...prev.loft,
          shutters: {
            ...prev.loft.shutters,
            [field]: value,
          },
        },
      };
    });
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
          Loft
        </h2>
        <label className="inline-flex items-center gap-2 text-xs text-slate-700">
          <input
            type="checkbox"
            checked={loft.enabled}
            onChange={function (e) {
              update("enabled", e.target.checked);
            }}
            className="h-3 w-3 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
          />
          <span>Enable loft</span>
        </label>
      </div>

      {loft.enabled && (
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Loft height (ft)
            </label>
            <input
              type="number"
              min="1"
              step="0.1"
              value={loft.heightFt}
              onChange={function (e) {
                update("heightFt", parseFloat(e.target.value) || 0);
              }}
              className="w-full rounded-md border border-slate-300 bg-white px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Shutter count
            </label>
            <input
              type="number"
              min="0"
              max="6"
              value={loft.shutters.count}
              onChange={function (e) {
                updateShutters("count", parseInt(e.target.value, 10) || 0);
              }}
              className="w-full rounded-md border border-slate-300 bg-white px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Shutter material
            </label>
            <select
              value={loft.shutters.materialType}
              onChange={function (e) {
                updateShutters("materialType", e.target.value);
              }}
              className="w-full rounded-md border border-slate-300 bg-white px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="laminate">Laminate</option>
              <option value="aluLaminate">Aluminium + Laminate</option>
              <option value="aluGlass">Aluminium + Glass</option>
            </select>
          </div>
        </div>
      )}
    </section>
  );
}

