function convertTemperature() {
  var input = document.getElementById("input").value;
  var unit = document.getElementById("unit").value;
  var resultElement = document.getElementById("result");
  var convertedTemp;

  if (unit === "celsius") {
    convertedTemp = (input * 9/5) + 32;
    resultElement.innerText = input + " Celsius = " + convertedTemp.toFixed(2) + " Fahrenheit";
  } else {
    convertedTemp = (input - 32) * 5/9;
    resultElement.innerText = input + " Fahrenheit = " + convertedTemp.toFixed(2) + " Celsius";
  }
}
