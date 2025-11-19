import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const generatePDF = (breakdown, total, dims) => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Wardrobe Estimate", 14, 20);

  doc.setFontSize(12);
  doc.text(
    "Dimensions: " + dims.width + " ft × " + dims.height + " ft",
    14,
    30
  );

  autoTable(doc, {
    head: [["Part", "Amount"]],
    body: Object.entries(breakdown).map(([k, v]) => [
      k.toUpperCase(),
      "₹ " + v.toLocaleString("en-IN"),
    ]),
    startY: 40,
  });

  doc.setFontSize(16);
  doc.text(
    "TOTAL: ₹" + total.toLocaleString("en-IN"),
    14,
    doc.lastAutoTable.finalY + 20
  );

  doc.save("Wardrobe_Estimate.pdf");
};

