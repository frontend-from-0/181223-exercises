// 1. Write a function that takes an array of integers and returns the sum of all elements.
// Input: [1, 2, 3, 4]
// Output: 10
const integersEx1 = [1, 2, 3, 4];
const integersEx1V2 = [10, 2, 30, 4];

function sumArrayElements(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {   //for(let num of array)
		sum += array[i];
	}
	return sum;
}

console.log('Exercise 1: ');
console.log(sumArrayElements(integersEx1));
console.log(sumArrayElements(integersEx1V2));

// 1. Create a function definition that takes array of integers 
//as input => 1 paramter (array)
// 2. Create a variable to store the sum
// 3. Loop through the array to add current element to the sum variable
// 4. Return the sum result
// 5. Call the fucntion with example data

console.log('----------------------------');



// 2. Write a function that takes an array of integers 
//and returns the average of all elements.
//Input: [1, 2, 3, 4]
// Output: 2.5
function findAverage(array) {
	const sum = sumArrayElements(array);

	return sum / array.length;
}



// 1. Create a function
// 2. Create a variable average of all elements
// 3. Call the sumArrayElements function and store result in a variable (sum)
// 4. Devide sum by number of element in the array and store in the average variable
// 5. Return the result
// 6. Call the function with example data

console.log('Exercise 2:');
console.log(findAverage(integersEx1));
console.log(findAverage(integersEx1V2));
console.log('----------------------------');


// 3. Write a function that takes an array of strings and concatenates them together adding spaces.
// Input: ["Hello", "World", "!"]
// Output: "Hello World !"

let stringE3 = ['Hello', 'World', '!'];

function addArrOfStrings(arr) {
	let newString = '';
	for (i=0; i<arr.length; i++) {
		newString += arr[i];

		if (i< arr.length - 1) {
			newString +=' ';
		}
	}
	return newString;
}
console.log('Exercise 3:');
const newString = addArrOfStrings(stringE3);
console.log(newString);
console.log('----------------------------');


// 4. Write a function that takes an array of integers and returns a new array with odd numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 3, 7]
let arrayEx = [1, 2, 3, 4, 7, 10];

function getOddNumbers(array) {
	const oddNumbers = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 !== 0) {
			oddNumbers.push(array[i]);
		}
	}

	return oddNumbers;
}

console.log('Exercise 4: ');
console.log(getOddNumbers(arrayEx));
console.log(getOddNumbers([1, 2, 0, 34, 23]));
console.log('----------------------------');


// 5. Write a function that takes an array of integers and returns a new array with even numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [ 2, 4, 10]
const testArrayEx5 = [1, 2, 3, 4, 7, 10];

function filterEvenNumbers(arr){
    const evenNumbers =[];
    for (let i=0; i< arr.length; i++) {
            if(arr[i]%2 ===0){
                evenNumbers.push(arr[i]);
            }
    }
	return evenNumbers;
}
console.log('Exercise 5: ' );

const evenNumbers = filterEvenNumbers(testArrayEx5);
console.log(evenNumbers);
console.log('----------------------------');


// 6. Write a function that takes an array and a value, and returns a new array with all occurrences of the value removed.
// Input: ([1, 2, 3, 4, 2], 2)
// Output: [1, 3, 4]
const testArrayEx6 = [1, 2, 3, 4, 2];

function removeOccurences(array, valueToRemove) {
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] !== valueToRemove) {
			newArray.push(array[i]);
		}
	}
	return newArray;
}


console.log('exercise 6:');
console.log(removeOccurences(testArrayEx6, 3));
console.log('----------------------------');


// 7. Write a function that takes an object and returns the keys as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["name", "age", "city"]
const testObjEx7 = { name: 'John', age: 30, city: 'New York' };
function getObjectKeys(object){
  return Object.keys(object);
};


console.log('exercise 7:');
console.log(getObjectKeys(testObjEx7));
console.log('----------------------------');


// 8. Write a function that takes an object and returns the values as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["John", 30, "New York"]
const testObjEx8 = { name: 'John', age: 30, city: 'New York' };
function getObjectValues(object){
	return Object.values(object);
  };

  console.log('exercise 8:');
console.log(getObjectValues(testObjEx8));
console.log('----------------------------');


// 9. Write a function that takes an object and a key, and returns true if the key exists in the object, otherwise false.
// Input: ({name: "John", age: 30, city: "New York"}, "age")
// Output: true
// Input: ({name: "John", age: 30, city: "New York"}, "surname")
// Output: false
const testObjEx9 = { name: 'John', age: 30, city: 'New York' };
function keyExists(obj, key) {
	// Use the 'in' operator to check if the key exists in the object
	return key in obj;
  }


console.log('Exercise 9: ');
console.log(keyExists(testObjEx9, 'age'));
console.log('----------------------------');


// 10. Write a function that takes an object and a key-value pair, and adds the key-value pair to the object.
// Input: ({name: "John", age: 30}, "city", "New York")
// Output: {name: "John", age: 30, city: "New York"}
const testObjEx10 = { name: 'John', age: 30 };
function addKeyValuePair(obj, key, value) {
	obj[key] = value;
	return obj;
  }
console.log('Exercise 10: ');
console.log(addKeyValuePair(testObjEx10, 'city', 'New York'));
console.log('----------------------------');


// 11. Write a function that takes an object and a key, and removes the key-value pair from the object.
// Input: ({name: "John", age: 30, city: "New York"}, "city")
// Output: {name: "John", age: 30}
const testObjEx11 = { name: 'John', age: 30, city: 'New York' };

function removeKeyValuePair(obj, key) {
	if (obj.hasOwnProperty(key)) {
	  delete obj[key];
	}
	return obj;
  }
  

console.log('Exercise 11: ');
console.log(removeKeyValuePair(testObjEx11, "city"));
console.log('----------------------------');


// 12. Write a function that takes two arrays of equal length and returns an object with the first array as keys 
//and the second array as values.
// Input: (["name", "age", "city"], ["John", 30, "New York"])
// Output: {name: "John", age: 30, city: "New York"}
const array1Ex12 = ['name', 'age', 'city'];
const array2Ex12 = ['John', 30, 'New York'];

function matchKeysAndValues(keysArr, valuesArr) {
	const newMatchingArray = {} ;

	if (keysArr.length !== valuesArr.length) {
		throw new Error('Both arrays must have the same length.');
	  }
	
	  for (let i = 0; i < keysArr.length; i++) {
		newMatchingArray [keysArr[i]] = valuesArr[i];
	  }
	  	  return newMatchingArray;
	}

console.log('Exercise 12: ');
const result = matchKeysAndValues(array1Ex12, array2Ex12);
console.log(result);