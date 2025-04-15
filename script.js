function calculateTip() {
    const bill = parseFloat(document.getElementById('billAmount').value);
    const tipPercent = parseFloat(document.getElementById('tipPercent').value);
    const resultDisplay = document.getElementById('result');
  
    if (isNaN(bill) || isNaN(tipPercent) || bill <= 0 || tipPercent < 0) {
      resultDisplay.textContent = 'Please enter valid numbers!';
      return;
    }
  
    const tip = (tipPercent / 100) * bill;
    const total = bill + tip;
  
    resultDisplay.textContent = `Total: ksh${total.toFixed(2)} (Tip: ksh${tip.toFixed(2)})`;
  }
  