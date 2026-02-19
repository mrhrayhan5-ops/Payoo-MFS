document.getElementById("cashout-btn").addEventListener("click", function () {
    // get number
    const cashoutNumberInput = document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);
    if (cashoutNumber.length != 11) {
        alert("Invalid Agent Number");
        return;
    }
    // get amount
    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);
    // current balance
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);
    // calculate
    const newBalance = Number(balance) - Number(cashoutAmount);
    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }

    // pin varify
    const cashoutPinInput = document.getElementById("cashout-pin");
    const cashoutPin = cashoutPinInput.value;
    if (cashoutPin === "1234") {
        alert("Cashout Success");
        console.log("new balance", newBalance);
        balanceElement.innerText = newBalance;
    } else {
        alert("invalid pin");
        return;
    }
});