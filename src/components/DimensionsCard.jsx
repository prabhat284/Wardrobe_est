import React from "react";

export function DimensionsCard(props) {
  var design = props.design;
  var setDesign = props.setDesign;

  var dims = design.dimensions;
  var width = dims.widthFt;
  var height = dims.heightFt;
  var depth = dims.depthFt;

  var carcassSqft = width * height * 1.8;

  function updateField(field, value) {
    var num = parseFloat(value);
    if (isNaN(num)) {
      num = 0;
    }
    setDesign(function (prev) {
      return {
        ...prev,
        dimensions: {
          ...prev.dimensions,
          [field]: num,
        },
      };
    });
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 sm:p-5">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
        Dimensions
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Width (ft)
          </label>
          <input
            type="number"
            min="1"
            step="0.1"
            value={width}
            onChange={function (e) {
              updateField("widthFt", e.target.value);
            }}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Height (ft)
          </label>
          <input
            type="number"
            min="1"
            step="0.1"
            value={height}
            onChange={function (e) {
              updateField("heightFt", e.target.value);
            }}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Depth (ft)
          </label>
          <input
            type="number"
            min="1"
            step="0.1"
            value={depth}
            onChange={function (e) {
              updateField("depthFt", e.target.value);
            }}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
      <p className="mt-3 text-[11px] text-slate-500">
        {"Approx. carcass area: " + carcassSqft.toFixed(1) + " sq.ft"}
      </p>
    </section>
  );
}

