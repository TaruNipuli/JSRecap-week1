'use strict';

const number = parseInt(prompt("Enter a positive integer: "));

// Set the table heading
document.getElementById("table-heading").innerText = "Multiplication Table:";

// Get the table element from the HTML document
const table = document.getElementById("table");

// Generate the multiplication table using nested for loops
for (let i = 1; i <= number; i++) {
    // Create a new row for each iteration of the outer loop
    const row = document.createElement("tr");
    for (let j = 1; j <= number; j++) {
        // Create a new cell for each iteration of the inner loop
        const cell = document.createElement("td");
        // Calculate the product of the current row and column values
        const product = i * j;
        // Set the text content of the cell to the product
        cell.textContent = product;
        // Append the cell to the row
        row.appendChild(cell);
    }
    // Append the row to the table
    table.appendChild(row);
}