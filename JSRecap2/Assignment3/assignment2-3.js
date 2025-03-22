
const numbers = [];
let input;


while(input !== "done") {
    input = prompt("Enter number (or write 'done' to quit)");
    numbers.push(parseInt(input));
}

console.log(`You entered these numbers: ${numbers} `)
document.getElementById("allNumbers").innerText = `You entered: ${numbers}`

const evenNumbers = [];
for (const number of numbers) {
    if (number % 2 === 0) {
        evenNumbers.push(number)
    }
}

if (evenNumbers.length > 0) {
    console.log(`Even Numbers: ${evenNumbers}`);
    document.getElementById("evenNumbers").innerText = `Even numbers: ${evenNumbers}`
} else {
    console.log('Even Numbers: None');
}







/*Write a JavaScript program that prompts the user to enter a series of numbers one by one and extracts and displays only the even numbers from the entered values using the for...of loop.

   x Define an empty array to store the numbers entered by the user.

    xUse a loop (e.g., while or do...while) to prompt the user for numbers and add them to the array until the user decides to stop.

    Use the for...of loop to iterate over the entered values stored in the array.

    Inside the loop, check if the current number is even using the modulo operator %.

    If the current number is even, display it on the HTML document.

    After the loop completes, display a message indicating the end of the program.

        Prompts:

        Enter a number (or 'done' to finish): 5
        Enter a number (or 'done' to finish): 12
        Enter a number (or 'done' to finish): 8
        Enter a number (or 'done' to finish): 3
        Enter a number (or 'done' to finish): 10
        Enter a number (or 'done' to finish): done

Example Output:

Even Numbers: 12, 8, 10

Prompts:

Enter a number (or 'done' to finish): 1
Enter a number (or 'done' to finish): 3
Enter a number (or 'done' to finish): 5
Enter a number (or 'done' to finish): 7
Enter a number (or 'done' to finish): done

Example Output:

Even Numbers: None
*/