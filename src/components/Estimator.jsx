import React, { useState } from "react";
import { initialDesign } from "../config/initialDesign";

import { DimensionsCard } from "./DimensionsCard";
import { TierPresetCard } from "./TierPresetCard";
import { CarcassCard } from "./CarcassCard";
import { ShutterConfigCard } from "./ShutterConfigCard";
import { AccessoriesCard } from "./AccessoriesCard";
import { HardwareCard } from "./HardwareCard";
import { LoftCard } from "./LoftCard";
import { SummaryCard } from "./SummaryCard";
import { InternalsCard } from "./InternalsCard";


export default function Estimator() {
  var _useState = useState(initialDesign);
  var design = _useState[0];
  var setDesign = _useState[1];

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white shadow-sm border border-slate-200 p-6 sm:p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Wardrobe Estimator
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Modular designer: carcass, shutters, internals, hardware, accessories, lofts.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.5fr,1fr]">
          {/* LEFT column: config sections */}
          <div className="space-y-6">
            <DimensionsCard design={design} setDesign={setDesign} />
            <TierPresetCard design={design} setDesign={setDesign} />
            <CarcassCard design={design} setDesign={setDesign} />
            <ShutterConfigCard design={design} setDesign={setDesign} />
            <InternalsCard design={design} setDesign={setDesign} />   {/* NEW */}
            <HardwareCard design={design} setDesign={setDesign} />
            <AccessoriesCard design={design} setDesign={setDesign} />
            <LoftCard design={design} setDesign={setDesign} />
            {/* InternalConfig component can be added later similarly */}
          </div>

          {/* RIGHT column: summary */}
          <SummaryCard design={design} />
        </div>
      </div>
    </div>
  );
}

