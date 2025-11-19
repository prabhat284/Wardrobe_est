// Compartment-wise shutter material options

export const SHUTTER_TYPES = {
  laminate: {
    id: "laminate",
    label: "Laminate shutter",
    // rates per sq.ft for Deco / Premium / Luxury
    rates: {
      deco: 1600,
      premium: 1800,
      luxury: 2000,
    },
  },
  aluLaminate: {
    id: "aluLaminate",
    label: "Aluminium + laminate",
    rates: {
      deco: 2600,
      premium: 2800,
      luxury: 3000,
    },
  },
  aluGlass: {
    id: "aluGlass",
    label: "Aluminium + clear/frosted glass",
    rates: {
      deco: 3000,
      premium: 3400,
      luxury: 3800,
    },
  },
  aluFluted: {
    id: "aluFluted",
    label: "Aluminium + fluted glass",
    rates: {
      deco: 3800,
      premium: 4200,
      luxury: 4800,
    },
  },
};

