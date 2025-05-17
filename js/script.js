let isCelsiusToFahrenheit = true;

function toggleConversion() {
isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
const input = document.querySelector(".input");
const output = document.querySelector(".output");

if (isCelsiusToFahrenheit) {
    input.textContent = "Celsius";
    output.textContent="Fahrenheit";
} else {
    input.textContent = "Fahrenheit";
    output.textContent="Celsius";
}

document.getElementById("inputTemp").value = "";
document.getElementById("output").innerText = "";
}

function convertTemperature() {
var input = document.getElementById("inputTemp").value;
if (input === "" || isNaN(input)) {
    document.getElementById("output").innerText = "Please enter a valid number!";
    return;
}
var result;
if (isCelsiusToFahrenheit) {
    // Convert Celsius to Fahrenheit
    result = (input * 9 / 5) + 32;
    document.getElementById("output").innerText = result.toFixed(2) + "°F";
    document.getElementById("explain").innerText = "(S(°C) x 9/5) + 32 = (" + input + "°C x 9/5) + 32 =" + result.toFixed(2) + "°F";
    document.getElementById("inputText").innerText = input + "°C";
    document.getElementById("outputText").innerText = result.toFixed(2) + "°F";
    return;
} else {
    // Convert Fahrenheit to Celsius
    result = (input - 32) * 5 / 9;
    document.getElementById("output").innerText = result.toFixed(2) + "°C";
    document.getElementById("explain").innerText = "(S(°C) x 5/9) + 32 = (" + input + "°F - 32) x 5/9 =" + result.toFixed(2) + "°C";
    document.getElementById("inputText").innerText = input + "°F";
    document.getElementById("outputText").innerText = result.toFixed(2) + "°C";
    return;
}
}