import React from "react";
import { SHUTTER_TYPES } from "../config/shutterTypes";

export function ShutterConfigCard(props) {
  var design = props.design;
  var setDesign = props.setDesign;

  var shutters = design.shutters;
  var width = design.dimensions.widthFt;

  var totalShutterWidth = shutters
    .map(function (s) {
      return s.widthFt || 0;
    })
    .reduce(function (sum, v) {
      return sum + v;
    }, 0);

  function updateShutterCount(newCount) {
    var n = parseInt(newCount, 10);
    if (!n || n < 1) {
      return;
    }
    if (n > 8) {
      n = 8;
    }
    setDesign(function (prev) {
      var current = prev.shutters.slice(0, n);
      while (current.length < n) {
        current.push({
          id: current.length + 1,
          widthFt: width / n,
          materialType: "laminate",
          openType: "hinged",
          handleType: "basic",
        });
      }
      return {
        ...prev,
        shutters: current,
      };
    });
  }

  function updateShutterWidth(id, value) {
    var w = parseFloat(value);
    if (isNaN(w) || w < 0) {
      w = 0;
    }
    setDesign(function (prev) {
      return {
        ...prev,
        shutters: prev.shutters.map(function (s) {
          if (s.id === id) {
            return {
              ...s,
              widthFt: w,
            };
          }
          return s;
        }),
      };
    });
  }

  function updateShutterMaterial(id, newType) {
    setDesign(function (prev) {
      return {
        ...prev,
        shutters: prev.shutters.map(function (s) {
          if (s.id === id) {
            return {
              ...s,
              materialType: newType,
            };
          }
          return s;
        }),
      };
    });
  }

  var shutterCount = shutters.length;

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
        Shutters (compartment-wise)
      </h2>
      <p className="mt-1 text-xs text-slate-500">
        Different widths and materials per shutter.
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <label className="text-xs font-medium text-slate-700">
          Number of shutters
        </label>
        <input
          type="number"
          min="1"
          max="8"
          value={shutterCount}
          onChange={function (e) {
            updateShutterCount(e.target.value);
          }}
          className="w-20 rounded-md border border-slate-300 px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <span className="text-[11px] text-slate-500">
          {"Sum of widths: " +
            totalShutterWidth.toFixed(2) +
            " ft (Wardrobe width: " +
            width.toFixed(2) +
            " ft)"}
        </span>
      </div>

      {Math.abs(totalShutterWidth - width) > 0.01 && (
        <p className="mt-1 text-[11px] text-amber-600">
          Note: Sum of shutter widths does not match total width. Adjust widths
          for accurate costing.
        </p>
      )}

      <div className="mt-4 space-y-2">
        {shutters.map(function (s) {
          return (
            <div
              key={s.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
            >
              <div className="text-xs text-slate-700">
                <div className="font-semibold">{"Shutter " + s.id}</div>
                <div className="text-[11px] text-slate-500">
                  {"Width × height used for costing."}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={s.widthFt}
                  onChange={function (e) {
                    updateShutterWidth(s.id, e.target.value);
                  }}
                  className="w-20 rounded-md border border-slate-300 bg-white px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <span className="text-[11px] text-slate-500">ft</span>
              </div>
              <select
                value={s.materialType}
                onChange={function (e) {
                  updateShutterMaterial(s.id, e.target.value);
                }}
                className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {Object.keys(SHUTTER_TYPES).map(function (key) {
                  var opt = SHUTTER_TYPES[key];
                  return (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
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

