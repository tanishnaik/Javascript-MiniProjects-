let billAmount = document.getElementById("bill-amt");
let percentageTip = document.getElementById("percentage-tip");
let tipAmount = document.getElementById("tip-amt");
let totalAmount = document.getElementById("total-amt");
let buttonCalculate = document.getElementById("calculate");
let outputDiv = document.querySelector(".output");

buttonCalculate.addEventListener("click", () => {
    let billAmountValue = parseFloat(billAmount.value);
    let percentageTipValue = parseFloat(percentageTip.value);

    if (billAmountValue < 0 || isNaN(billAmountValue)) {
        outputDiv.innerHTML = `<span>${billAmountValue} is Invalid!!</span>`;
    } else if (percentageTipValue < 0 || isNaN(percentageTipValue)) {
        outputDiv.innerHTML = `<span>Please Enter Valid Percentage Tip</span>`;
    } else {
        let calculatedTipAmount = (percentageTipValue / 100) * billAmountValue;
        let calculatedTotalAmount = billAmountValue + calculatedTipAmount;

        // Set the values to the input fields
        tipAmount.value=calculatedTipAmount.toFixed(2);
        totalAmount.value=calculatedTotalAmount.toFixed(2);

        // Display the result in the output div
        outputDiv.innerHTML = `<span>Tip: ${calculatedTipAmount.toFixed(2)}<br>Total: ${calculatedTotalAmount.toFixed(2)}</span>`;
    }
});
