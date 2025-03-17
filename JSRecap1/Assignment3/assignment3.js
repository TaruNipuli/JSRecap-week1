//const side1 = parseFloat(prompt("Enter the length of side 1: "));
//const side2 = parseFloat(prompt("Enter the length of side 2: "));
//const side3 = parseFloat(prompt("Enter the length of side 3: "));

const sides = [];

for (i = 1; i <= 3; i++) {
    sides.push(parseFloat(prompt(`Enter the side ${i}: `)));
}

// Extraxt sides from the array, meaning that the first element of the array will be assigned to side1 and so on
const [side1, side2, side3] = sides;

if (side1 === side2 && side2 === side3) {
    document.getElementById("result").innerText = "It's equilateral triangle";
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
    document.getElementById("result").innerText = "It's isosceles triangle";
} else {
    document.getElementById("result").innerText = "It's scalene triangle";
}



