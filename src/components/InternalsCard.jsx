import React from "react";
import { INTERNAL_LAYOUTS } from "../config/internalLayouts";

export function InternalsCard(props) {
  var design = props.design;
  var setDesign = props.setDesign;

  var shutters = design.shutters;
  var internals = design.internals || [];

  function getLayoutForShutter(shutterId) {
    var found = internals.find(function (x) {
      return x.shutterId === shutterId;
    });
    return found ? found.layoutType : "double_hang";
  }

  function setLayoutForShutter(shutterId, layoutType) {
    setDesign(function (prev) {
      var current = prev.internals || [];
      var updated = false;
      var next = current.map(function (x) {
        if (x.shutterId === shutterId) {
          updated = true;
          return { shutterId: shutterId, layoutType: layoutType };
        }
        return x;
      });
      if (!updated) {
        next.push({ shutterId: shutterId, layoutType: layoutType });
      }
      return {
        ...prev,
        internals: next,
      };
    });
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
        Internals (per compartment)
      </h2>
      <p className="mt-1 text-xs text-slate-500">
        Choose internal layout for each shutter compartment.
      </p>

      <div className="mt-3 space-y-2">
        {shutters.map(function (s) {
          var layoutType = getLayoutForShutter(s.id);
          return (
            <div
              key={s.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs"
            >
              <div>
                <div className="font-semibold text-slate-700">
                  {"Compartment " + s.id}
                </div>
                <div className="text-[11px] text-slate-500">
                  {"Linked to shutter width " +
                    (s.widthFt || 0).toFixed(2) +
                    " ft"}
                </div>
              </div>
              <select
                value={layoutType}
                onChange={function (e) {
                  setLayoutForShutter(s.id, e.target.value);
                }}
                className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {Object.keys(INTERNAL_LAYOUTS).map(function (key) {
                  var layout = INTERNAL_LAYOUTS[key];
                  return (
                    <option key={layout.id} value={layout.id}>
                      {layout.label}
                    </option>
                  );
                })}
              </select>
            </div>
          );
        })}
      </div>
    </section>
  );
}

