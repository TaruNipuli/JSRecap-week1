

const point1 = prompt("Enter the coordinates of the first point (x1, y1) separated by a comma:");
// Split the input string by comma and convert the resulting substrings to numbers
const [x1, y1] = point1.split(',').map(Number);
// const [x1, y1] is creating an array with two elements, x1 and y1.

const point2 = prompt("Enter the coordinates of the second point (x2, y2) separated by a comma:");
const [x2, y2] = point2.split(',').map(Number);

// Calculate Euclidean distance
const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

// Display the result in the HTML document
document.getElementById("result").innerText = `The distance between the points (${x1}, ${y1}) and (${x2}, ${y2}) is ${distance.toFixed(2)}.`;
// to.Fixed(2) is used to round the result to 2 decimal places.