
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




/*Write a JavaScript program that focuses on various array operations using the push(), includes(), pop(), and numerical sorting functions. Your program should include the following requirements:

    xCreate an empty array called numbers.

    xPrompt the user to enter five numbers, one by one, and add each entered number to the numbers array using the push() method.

    xDisplay the contents of the numbers array on the HTML document or in the console.

    xPrompt the user to enter a number and check if the entered number is included in the numbers array using the includes() method.

    xDisplay a message indicating whether the entered number is found or not found in the numbers array.

    xRemove the last number from the numbers array using the pop() method.

    xDisplay the updated numbers array on the HTML document or in the console.

    xSort the numbers array in ascending numerical order using the sort() method with a custom comparison function.

    xDisplay the sorted numbers array on the HTML document or in the console.

        Example Output:

        Enter Number 1: 10
        Enter Number 2: 5
        Enter Number 3: 7
        Enter Number 4: 3
        Enter Number 5: 9

        Numbers: [10, 5, 7, 3, 9]

        Enter a Number to Search: 7
        Number 7 is found in the array.

        Updated Numbers: [10, 5, 7, 3]

        Sorted Numbers: [3, 5, 7, 10]*/
