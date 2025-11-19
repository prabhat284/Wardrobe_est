// Central initial state for the wardrobe estimator
import { INTERNAL_LAYOUTS } from "./internalLayouts"; // add this at top


export const initialDesign = {
  dimensions: {
    widthFt: 9,
    heightFt: 7.5,
    depthFt: 2,
  },

  // tier per element (Deco / Premium / Luxury)
  tiers: {
    shutter: "premium",
    carcass: "premium",
    internal: "premium",
    hardware: "premium",
  },

  // basic carcass settings (can expand later)
  carcass: {
    material: "hdhmr",         // hdhmr / bwp_ply / mdf
    finish: "textured_ash",    // code for laminate decors
    sideThicknessMm: 18,
    shelfThicknessMm: 18,
    backPanelType: "ply_6mm",  // ply_6mm / ply_9mm / hdhmr_8mm
  },

  // shutters: per-compartment width + material
  shutters: [
    { id: 1, widthFt: 3, materialType: "laminate", openType: "hinged", handleType: "basic" },
    { id: 2, widthFt: 3, materialType: "laminate", openType: "hinged", handleType: "basic" },
    { id: 3, widthFt: 3, materialType: "laminate", openType: "hinged", handleType: "basic" },
  ],

  // internals: simple placeholder (we will flesh out later)
  internals: [
    { shutterId: 1, layoutType: "double_hang", shelves: 1, drawers: 2, shoeRacks: 0 },
    { shutterId: 2, layoutType: "shelves_plus_drawers", shelves: 3, drawers: 3, shoeRacks: 1 },
    { shutterId: 3, layoutType: "long_hang", shelves: 1, drawers: 1, shoeRacks: 0 },
  ],

  hardware: {
    hingeModel: "softclose_std",         // normal / softclose_std / blum
    drawerChannelModel: "telescopic_sc", // roller / telescopic_sc / undermount_sc
    slidingSystem: null,                 // or "basic_2track" / "softclose_3track"
    lockCount: 1,
    handleFamily: "basic",               // basic / profile_black / premium
  },

  accessories: [
    // { id: "pulldown", quantity: 1, attachedTo: 1 },
  ],

  loft: {
    enabled: false,
    heightFt: 2.5,
    depthFt: 2,
    shutters: {
      count: 0,
      materialType: "laminate",
    },
  },

  lighting: {
    stripPerCompartment: false,
    sensorPerCompartment: false,
    spotCount: 0,
  },
};

