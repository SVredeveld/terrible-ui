function rollDice() {
    const diceBox = document.getElementById('diceBox');
    const phoneLength = + document.getElementById('phoneLength').value;
    const options = {
        element: diceBox,
        numberOfDice: phoneLength,
        callback: (dieRolls) =>  {
            const phoneNumber = dieRolls.join("");
            const paragraph = document.getElementById('phoneNumber');
            paragraph.innerHTML = "Is your phone number " + phoneNumber + " ?";
        }
    }
    rollADie(options);
}

function showDisclaimer() {
    const disclaimer = document.getElementById('disclaimer');
    disclaimer.innerHTML = "* due to technical difficulties only phone numbers with digits between 1 and 6 are supported. We are currently investigating on this issue.";
    setTimeout(() => disclaimer.innerHTML = "", 5000)
}