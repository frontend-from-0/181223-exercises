// Exercise 1:
// Given an array of numbers, filter out the even numbers.
// Expected output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
const numbers = [3, 1, 4, 11, 5, 9, 2, 6, 5, 3, 5];
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);



// Exercise 2: Sorting Strings
// Sort an array of strings in alphabetical order.
// Expected output: ["apple", "banana", "grape", "orange", "pear"]
const fruits = ['banana', 'Apple', 'pear', 'orange', 'Orange', 'grape'];
const sortedFruits = fruits.map(item => item.toLowerCase()).sort();
console.log(sortedFruits);


// Exercise 3: Descending Order
// Sort an array of numbers in descending order.
// Expected output: [100, 40, 25, 10, 5, 1]
const scores = [40, 100, 1, 5, 25, 10];
const sortedScores = scores.sort((a, b) => b - a);
console.log(sortedScores);

// Exercise 4: Sorting Objects
// Sort an array of objects based on a specific property (e.g., age).
// Expected output: Sorted array by age in ascending order
const people = [
	{ name: 'John', age: 30 },
	{ name: 'Jane', age: 25 },
	{ name: 'Gary', age: 35 },
	{ name: 'Ellen', age: 22 },
];
const sortedPeople = people.sort((a, b) => a.age - b.age);
console.log(sortedPeople);

// Exercise 5: Complex Sorting
// Sort an array of strings by their length.
// Expected output: ["pen", "book", "paper", "pencil", "notebook"]

const words = ['notebook', 'pen', 'paper', 'book', 'pencil'];
const sortedWords = words.sort((a, b) => a.length - b.length);
console.log(sortedWords); 
