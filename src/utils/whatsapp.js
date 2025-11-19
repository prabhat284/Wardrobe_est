export const generateWhatsAppLink = (total, dims) => {
  const msg =
    "Wardrobe Quote\n" +
    "Dimensions: " +
    dims.width +
    " × " +
    dims.height +
    " ft\n" +
    "Total: ₹" +
    total.toLocaleString("en-IN");

  return "https://wa.me/?text=" + encodeURIComponent(msg);
};

