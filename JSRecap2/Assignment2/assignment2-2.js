
const numbers = [];

for (let i = 1; i <= 5; i++ ) {
    numbers.push(parseInt(prompt(`Enter number ${i}`)));
}

console.log(`Numbers: ${numbers}`);
document.getElementById("numberArray").innerText = `Numbers: ${numbers}`;

const checkNumber = parseInt(prompt("Check if number is in array"));
if (numbers.includes(checkNumber)) {
    console.log(`${checkNumber} is found in the array`)
    document.getElementById("checkResult").innerText = `${checkNumber} is found in the array`;
} else {
    console.log(`${checkNumber} is not in the array`)
    document.getElementById("checkResult").innerText = `${checkNumber} is not in the array`;
};

numbers.pop();
console.log(`Updated numbers: ${numbers}`);
document.getElementById("updated").innerText = `Updated numbers: ${numbers}`;

numbers.sort((a,b) => a-b);
console.log(`Sorted numbers: ${numbers}`);
document.getElementById("sorted").innerText = `Sorted numbers: ${numbers}`
