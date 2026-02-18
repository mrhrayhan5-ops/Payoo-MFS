// login btn
document.getElementById("login-btn").addEventListener("click", function () {
    // 1. get number
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber);
    // 2. get pin
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    console.log(pin);
    // 3. match num & pin
    if (contactNumber == "01234567890" && pin == "1234") {
        // 3,1. true >> alert > homepage
        alert("Login Success");
        // window.location.replace("/home.html");  // replace the existing page
        window.location.assign("/home.html");
    } else {
        alert("Login Failed");
        return;
    }
})