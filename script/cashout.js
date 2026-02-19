document.getElementById("cashout-btn").addEventListener("click", function () {
    // number validation
    const cashoutNumber = getValueFromInput("cashout-number");
    if (cashoutNumber.length !== 11) {
        alert("Invalid Number");
        return;
    };
    // amount validation
    const cashoutAmount = getValueFromInput("cashout-amount");
    // current balance
    const currentBalance = getBalance();
    //4- calculate
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);
    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }
    const pin = getValueFromInput("cashout-pin");
    if (pin === "1234") {
        alert("Cashout Successfull");
        setBalance(newBalance);
    } else {
        alert("Invalid Pin");
        return;
    }
});

// document.getElementById("cashout-btn").addEventListener("click", function () {
//     //1- get number
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if (cashoutNumber.length != 11) {
//         alert("Invalid Agent Number");
//         return;
//     }
//     //2- get amount
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);
//     //3- current balance
//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance);
//     //4- calculate
//     const newBalance = Number(balance) - Number(cashoutAmount);
//     if (newBalance < 0) {
//         alert("Invalid Amount");
//         return;
//     }

//     //5- pin varify
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const cashoutPin = cashoutPinInput.value;
//     if (cashoutPin === "1234") {
//         alert("Cashout Success");
//         console.log("new balance", newBalance);
//         balanceElement.innerText = newBalance;
//     } else {
//         alert("invalid pin");
//         return;
//     }
// });