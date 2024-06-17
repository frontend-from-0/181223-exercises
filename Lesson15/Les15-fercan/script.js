// 4. Use the `toLowerCase` method to convert a string to lowercase and print it to the console.

const stringExercise4 = 'FUNCTIONAL PROGRAMMING EMPHASIZES PURE FUNCTIONS AND IMMUTABLE DATA.';
let lowerCaseString = stringExercise4.toLowerCase();

console.log('Exercise 4: ' + lowerCaseString);
console.log('------------------------');

/*
5.a Use the `indexOf` method to find the index of "l" character in the string stringExercise5
and print it to the console.
const stringExercise5 =
	'JavaScript is a versatile language used for web development and beyond.';

console.log('Exercise 5: ', stringExercise5.indexOf("l") );
console.log('------------------------');
 5.b Use the `indexOf` method to find the index of "language" in the string stringExercise5 and print it to the console.

console.log('Exercise 5.b: ', stringExercise5.indexOf("language"));
console.log('------------------------');*/


// 6. Use the `lastIndexOf` method to find the last index of of "l" character in the string stringExercise5 and 
//print it to the console.

const stringExercise5 =
	'JavaScript is a versatile language used for web development and beyond.';

console.log('Exercise6: ' + stringExercise5.lastIndexOf("l"));
console.log('------------------------');



// 15. Remove extra spaces from the string stringExercise15 and print the result to the console.
const stringExercise15 = '    Hello world    ';

console.log('Exercise15: ' + stringExercise15.trim());
console.log('------------------------');



// 16. Extract the price and currency from a string below using "slice" method and print it to console.
const planPriceString = 'Premium plan - 9.99 USD/month.'; // Should return "9.99 USD"

console.log('Exercise16: ' + planPriceString.slice(15,23 ));
console.log('------------------------');