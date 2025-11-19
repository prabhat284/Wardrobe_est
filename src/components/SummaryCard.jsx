import React from "react";
import { computeEstimate } from "../utils/estimate";
import { generatePDF } from "../utils/pdf";
import { generateWhatsAppLink } from "../utils/whatsapp";

export function SummaryCard(props) {
  var design = props.design;

  var dims = design.dimensions;
  var estimate = computeEstimate(design);
  var breakdown = estimate.breakdown;
  var total = estimate.total;

  function formatMoney(value) {
    return "₹" + value.toLocaleString("en-IN", { maximumFractionDigits: 0 });
  }

  return (
    <aside className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-slate-900 text-slate-50 p-5 shadow-sm">
        <h2 className="text-sm font-semibold tracking-wide uppercase text-slate-300">
          Estimate Summary
        </h2>
        <p className="mt-1 text-[11px] text-slate-400">
          {"Size: " +
            dims.widthFt.toFixed(2) +
            " × " +
            dims.heightFt.toFixed(2) +
            " ft"}
        </p>
        <div className="mt-3 space-y-1 text-sm">
          {Object.keys(breakdown).map(function (key) {
            return (
              <div
                key={key}
                className="flex items-center justify-between text-slate-100"
              >
                <span className="uppercase text-[11px] tracking-wide text-slate-300">
                  {key}
                </span>
                <span className="font-medium">
                  {formatMoney(breakdown[key])}
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-4 border-t border-slate-700 pt-4">
          <p className="text-xs text-slate-400">Estimated total</p>
          <p className="mt-1 text-2xl font-bold">{formatMoney(total)}</p>
          <p className="mt-1 text-[11px] text-slate-400">
            Excludes GST, transport and on-site installation margin.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm space-y-3">
        <button
          type="button"
          onClick={function () {
            generatePDF(breakdown, total, dims);
          }}
          className="w-full rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Download PDF
        </button>
        <button
          type="button"
          onClick={function () {
            window.open(
              generateWhatsAppLink(total, dims),
              "_blank"
            );
          }}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Share on WhatsApp
        </button>
      </div>
    </aside>
  );
}

