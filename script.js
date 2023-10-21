function calculateMarkupAndMargin() {
    const sellingPrice = parseFloat(document.getElementById("sellingPrice").value);
    const cost = parseFloat(document.getElementById("cost").value);
  
    // Calculate Margin Untung (Profit Margin)
    const profitMargin = ((sellingPrice - cost) / sellingPrice) * 100;
  
    // Calculate Markup Untung (Profit Markup)
    const profitMarkup = ((sellingPrice - cost) / cost) * 100;
  
    document.getElementById("marginUntung").textContent = profitMargin.toFixed(2) + "%";
    document.getElementById("markupUntung").textContent = profitMarkup.toFixed(2) + "%";
  }
  