import { MATERIAL_RATES } from "../config/materialRates";
import { ACCESSORIES } from "../config/accessories";
import { SHUTTER_TYPES } from "../config/shutterTypes";
import { INTERNAL_LAYOUTS } from "../config/internalLayouts";


export function computeEstimate(design) {
  var width = design.dimensions.widthFt;
  var height = design.dimensions.heightFt;

  var tiers = design.tiers;

  var carcassSqft = width * height * 1.8;

  function costForPart(part) {
    var rate = MATERIAL_RATES[part][tiers[part]];
    var baseArea = part === "hardware" ? width : carcassSqft;
    return rate * baseArea;
  }

  // ---- shutters (existing) ----
  var shutterCostTotal = design.shutters
    .map(function (s) {
      var typeDef = SHUTTER_TYPES[s.materialType];
      if (!typeDef) {
        return 0;
      }
      var area = (s.widthFt || 0) * height;
      var rate = typeDef.rates[tiers.shutter];
      return area * rate;
    })
    .reduce(function (sum, v) {
      return sum + v;
    }, 0);

  // ---- internals: per-compartment layout ----
  var internalsArray = design.internals || [];
  var internalCostTotal = internalsArray
    .map(function (cfg) {
      var shutter = design.shutters.find(function (s) {
        return s.id === cfg.shutterId;
      });
      if (!shutter) {
        return 0;
      }
      var layoutDef = INTERNAL_LAYOUTS[cfg.layoutType];
      if (!layoutDef) {
        return 0;
      }
      var compWidth = shutter.widthFt || 0;
      var area = compWidth * height;
      var factor = layoutDef.factorPerSqft[tiers.internal];
      return area * factor;
    })
    .reduce(function (sum, v) {
      return sum + v;
    }, 0);

  // ---- accessories ----
  var accessoriesTotal = (design.accessories || [])
    .map(function (item) {
      var acc = ACCESSORIES.find(function (a) {
        return a.id === item.id;
      });
      if (!acc) {
        return 0;
      }
      var unitRate = acc[tiers.shutter];
      return unitRate * (item.quantity || 1);
    })
    .reduce(function (sum, v) {
      return sum + v;
    }, 0);

  // base carcass + base hardware still from MATERIAL_RATES
  var breakdown = {
    shutter: shutterCostTotal,
    carcass: costForPart("carcass"),
    internal: internalCostTotal,
    hardware: costForPart("hardware"),
    accessories: accessoriesTotal,
  };

  var total = Object.values(breakdown).reduce(function (a, b) {
    return a + b;
  }, 0);

  return { breakdown: breakdown, total: total };
}

