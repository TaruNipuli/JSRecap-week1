
function sortArray(array) {
    numbers.sort((a,b) => a-b);
    return array;
}


const numbers = [2, 5, 13, 77, 28, 3];

console.log(`Original array: ${numbers}`);

const sortedNumbers = sortArray(numbers);
console.log(`Sorted array: ${sortedNumbers}`);