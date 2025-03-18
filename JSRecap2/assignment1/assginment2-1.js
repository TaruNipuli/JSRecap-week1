
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
console.log(`Fruits: ${fruits}`);
console.log(`Lenght of Fruits: ${fruits.length}`);

console.log("Element at Index 2: " + fruits.at(2));
console.log("Last Element of Fruits: " + fruits.pop());

const  vegetables = [];
for (let i = 1; i <= 3; i ++) {
    vegetables.push(prompt(`Enter vegetable number ${i}`))
}

console.log(`Vegetables: ${vegetables}`);
console.log(`Lenght of Vegetables: ${vegetables.length}`);