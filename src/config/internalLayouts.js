// Internal layout presets per compartment

export const INTERNAL_LAYOUTS = {
  double_hang: {
    id: "double_hang",
    label: "Double hanging",
    description: "Two levels of short hanging, 1–2 shelves.",
    // cost per sq.ft of that compartment's face area
    factorPerSqft: {
      deco: 220,
      premium: 320,
      luxury: 450,
    },
  },
  long_hang: {
    id: "long_hang",
    label: "Long hanging",
    description: "Full-height long hanging, 1 shelf on top.",
    factorPerSqft: {
      deco: 180,
      premium: 260,
      luxury: 380,
    },
  },
  shelves_plus_drawers: {
    id: "shelves_plus_drawers",
    label: "Shelves + drawers",
    description: "Stacked shelves with 2–3 drawers at bottom.",
    factorPerSqft: {
      deco: 260,
      premium: 380,
      luxury: 520,
    },
  },
  only_shelves: {
    id: "only_shelves",
    label: "Only shelves",
    description: "Vertical stack of adjustable shelves.",
    factorPerSqft: {
      deco: 160,
      premium: 240,
      luxury: 340,
    },
  },
  shoe_and_shelves: {
    id: "shoe_and_shelves",
    label: "Shoes + shelves",
    description: "Lower shoe pull-outs, upper shelves.",
    factorPerSqft: {
      deco: 260,
      premium: 400,
      luxury: 560,
    },
  },
};

