// 4. Use the `toLowerCase` method to convert a string to lowercase and print it to the console.
const stringExercise4 =
	'FUNCTIONAL PROGRAMMING EMPHASIZES PURE FUNCTIONS AND IMMUTABLE DATA.';

console.log('Exercise 4: ');
console.log(stringExercise4.toLowerCase());

// 6. Use the `lastIndexOf` method to find the last index of of "l" character in the string stringExercise5 and print it to the console.

console.log('Exercise6: ', stringExercise5.lastIndexOf('l'));
console.log(stringExercise5.lastIndexOf('l'));

// 15. Remove extra spaces from the string stringExercise15 and print the result to the console.
const stringExercise15 = '    Hello world    ';

console.log('Exercise15: ',stringExercise15.trim);
console.log(stringExercise15.trim());

// 16. Extract the price and currency from a string below using "slice" method and print it to console.
const planPriceString = 'Premium plan - 9.99 USD/month.'; // Should return "9.99 USD"
const priceStartIndex = planPriceString.indexOf('- ') + 1;
const priceEndIndex = planPriceString.indexOf('/', priceStartIndex);
const priceAndCurrency = planPriceString.slice(priceStartIndex, priceEndIndex);

console.log('Exercise16: ', priceAndCurrency);
console.log( priceAndCurrency);