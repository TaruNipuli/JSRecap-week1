'use strict';

const tempCelsius = parseFloat(prompt("Enter the temperature in Celsius: "));

const tempFahrenheit = (tempCelsius * 9/5) + 32;
const tempKelvin = tempCelsius + 273.15;

tempResultFah = `${tempCelsius} Celsius in Fahrenheit: ${tempFahrenheit}`;
tempResultKel = `${tempCelsius} Celsius in Kelvin: ${tempKelvin}`;

document.getElementById("tempResultFah").innerText = tempResultFah;
document.getElementById("tempResultKel").innerText = tempResultKel;