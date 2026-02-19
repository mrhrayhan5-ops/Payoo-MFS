document.getElementById("add-money-btn").addEventListener("click", function () {
    // 1- get a bank
    const bankAccount = getValueFromInput("add-money-bank");
    if (bankAccount == "Select a bank") {
        alert("Please select a bank");
        return;
    }
    // 2- get a bank account number
    const accNum = getValueFromInput("add-money-number");
    if (accNum.length != 11) {
        alert("invalid acc number");
    }
    // 3- get amount
    const amount = getValueFromInput("add-money-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
    const pin = getValueFromInput("add-money-pin");
    if (pin == "1234") {
        alert(`Add money success form ${bankAccount}`);
        setBalance(newBalance);
    } else {
        alert("Invalid Pin");
        return;
    }
})