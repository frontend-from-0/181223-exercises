// 4. Use the `toLowerCase` method to convert a string to lowercase and print it to the console.
const stringExercise4 =
	'FUNCTIONAL PROGRAMMING EMPHASIZES PURE FUNCTIONS AND IMMUTABLE DATA.';

console.log('Exercise4: ');
console.log(stringExercise4.toLowerCase());

// 6. Use the `lastIndexOf` method to find the last index of of "l" character in the string stringExercise5 and print it to the console.
const stringExercise5=stringExercise4.toLowerCase()
console.log('Exercise6: ');
console.log(stringExercise5.lastIndexOf('l'));

// 15. Remove extra spaces from the string stringExercise15 and print the result to the console.
const stringExercise15 = '    Hello world    ';

console.log('Exercise15: ');
console.log(stringExercise15.trim());
// 16. Extract the price and currency from a string below using "slice" method and print it to console.
const planPriceString = 'Premium plan - 9.99 USD/month.'; // Should return "9.99 USD"
const startingIndex=planPriceString.indexOf('-')+2;
const lastingIndex=planPriceString.indexOf('/');
console.log(planPriceString.slice(startingIndex,lastingIndex));
console.log('Exercise16: ');
console.log(planPriceString.slice(15,23));
