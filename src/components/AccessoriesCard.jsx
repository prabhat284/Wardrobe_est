import React from "react";
import { ACCESSORIES } from "../config/accessories";

export function AccessoriesCard(props) {
  var design = props.design;
  var setDesign = props.setDesign;

  var items = design.accessories || [];

  function getQuantity(id) {
    var found = items.find(function (x) {
      return x.id === id;
    });
    return found ? found.quantity || 1 : 0;
  }

  function setQuantity(id, qty) {
    var q = parseInt(qty, 10);
    if (isNaN(q) || q < 0) {
      q = 0;
    }
    setDesign(function (prev) {
      var next = (prev.accessories || []).slice();
      var index = next.findIndex(function (x) {
        return x.id === id;
      });
      if (q === 0) {
        if (index !== -1) {
          next.splice(index, 1);
        }
      } else {
        if (index === -1) {
          next.push({ id: id, quantity: q, attachedTo: null });
        } else {
          next[index] = {
            ...next[index],
            quantity: q,
          };
        }
      }
      return {
        ...prev,
        accessories: next,
      };
    });
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
        Accessories
      </h2>
      <p className="mt-1 text-xs text-slate-500">
        Includes pull-downs, iron stand, staircase for loft etc.
      </p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {ACCESSORIES.map(function (a) {
          var qty = getQuantity(a.id);
          return (
            <div
              key={a.id}
              className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs"
            >
              <div className="text-slate-700">{a.name}</div>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={qty}
                  onChange={function (e) {
                    setQuantity(a.id, e.target.value);
                  }}
                  className="w-16 rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-right focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <span className="text-[11px] text-slate-500">qty</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

