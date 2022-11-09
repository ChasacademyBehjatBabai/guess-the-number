function calculate() {
    //Get number from user input by HTML id: "inputNumber"
    let inputNumber = parseInt(document.getElementById("inputNumber").value);

    //Make random number for opponent
    let randomNumber = parseInt(Math.random() * 10);
    let resultMsg = "";

    //Change result message based on which number is higher/lower
    if (inputNumber > parseInt(10)) {
        resultMsg = "You must choose between 0-10"
        document.getElementById("result").innerHTML = resultMsg
        return;
    }
    else if (inputNumber > randomNumber) {
        resultMsg = "Your number is too high."
    } else if (inputNumber === randomNumber) {
        resultMsg = "You chose the exact same number! You win!"
    } else {
        resultMsg = "Your number is too low."
    }

    //Print result
    document.getElementById("result").innerHTML = resultMsg
    document.getElementById("userNumber").innerHTML = "your number: " + inputNumber.toString()
    document.getElementById("randomNumber").innerHTML = "opponent number: " + randomNumber.toString()
}