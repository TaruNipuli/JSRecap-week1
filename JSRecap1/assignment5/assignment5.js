'use strict';

const number = parseInt(prompt("Enter a positive integer: "));

// Initialize the sum variable
let sum = 0;

// Calculate the sum of all natural numbers up to and including the entered number
for (let i = 1; i <= number; i++) {
    sum += i;
}

document.getElementById("result").innerText = `The sum of all natural numbers up to and including ${number} is ${sum}.`;