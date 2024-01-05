// script.js

function convertCelsiusToFahrenheit() {
    var celsiusInput = document.getElementById("celsiusInput").value;
    var fahrenheitOutput = document.getElementById("fahrenheitOutput");
    
    if (celsiusInput === "") {
      fahrenheitOutput.textContent = "Please enter a Celsius temperature";
    } else {
      var celsius = parseFloat(celsiusInput);
      var fahrenheit = (celsius * 9/5) + 32;
      fahrenheitOutput.textContent = celsius + " degrees Celsius is equal to " + fahrenheit.toFixed(2) + " degrees Fahrenheit";
    }
  }
  
  function convertFahrenheitToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheitInput").value;
    var celsiusOutput = document.getElementById("celsiusOutput");
    
    if (fahrenheitInput === "") {
      celsiusOutput.textContent = "Please enter a Fahrenheit temperature";
    } else {
      var fahrenheit = parseFloat(fahrenheitInput);
      var celsius = (fahrenheit - 32) * 5/9;
      celsiusOutput.textContent = fahrenheit + " degrees Fahrenheit is equal to " + celsius.toFixed(2) + " degrees Celsius";
    }
  }
  