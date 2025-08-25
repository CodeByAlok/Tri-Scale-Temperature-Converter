// script.js
function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const resultDiv = document.getElementById('result');
  
    if (tempInput === '') {
      resultDiv.innerHTML = 'Please enter a temperature value.';
      return;
    }
  
    const tempValue = parseFloat(tempInput);
  
    let convertedTemp;
  
    if (fromUnit === toUnit) {
      convertedTemp = tempValue;
    } else if (fromUnit === 'Celsius') {
      if (toUnit === 'Fahrenheit') {
        convertedTemp = (tempValue * 9/5) + 32;
      } else if (toUnit === 'Kelvin') {
        convertedTemp = tempValue + 273.15;
      }
    } else if (fromUnit === 'Fahrenheit') {
      if (toUnit === 'Celsius') {
        convertedTemp = (tempValue - 32) * 5/9;
      } else if (toUnit === 'Kelvin') {
        convertedTemp = (tempValue - 32) * 5/9 + 273.15;
      }
    } else if (fromUnit === 'Kelvin') {
      if (toUnit === 'Celsius') {
        convertedTemp = tempValue - 273.15;
      } else if (toUnit === 'Fahrenheit') {
        convertedTemp = (tempValue - 273.15) * 9/5 + 32;
      }
    }
  
    resultDiv.innerHTML = `Converted Temperature: ${convertedTemp.toFixed(2)} ${toUnit}`;
  }
  