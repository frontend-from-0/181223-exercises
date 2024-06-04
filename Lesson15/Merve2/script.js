// 4. Use the `toLowerCase` method to convert a string to lowercase and print it to the console.
const stringExercise4 =
	'FUNCTIONAL PROGRAMMING EMPHASIZES PURE FUNCTIONS AND IMMUTABLE DATA.';

console.log('Exercise 4: ');
console.log(stringExercise4.toLowerCase());
console.log('------------------------');

// 6. Use the `lastIndexOf` method to find the last index of of "l" character in the string stringExercise5 
//and print it to the console.

console.log('Exercise6: ');
console.log(stringExercise4.length);
console.log(stringExercise4.toLowerCase().lastIndexOf('l'));
console.log('------------------------');

// 15. Remove extra spaces from the string stringExercise15 and print the result to the console.
const stringExercise15 = '    Hello world    ';

console.log('Exercise15: ');
console.log(stringExercise15.trim());
console.log('------------------------');
// 16. Extract the price and currency from a string below using "slice" method and print it to console.
const planPriceString = 'Premium plan - 9.99 USD/month.'; // Should return "9.99 USD"

const startIndex = planPriceString.indexOf('- ') + 2;
const endIndex = planPriceString.indexOf('/', startIndex);

console.log('Exercise16: ');
console.log(planPriceString.slice(startIndex, endIndex));
console.log('------------------------');