// Recursion

// Example
// function doSomething(parameter) {
//   // base condition for recursive function
//   if (condition) {
//     return value;
//   } else {
//     // If condition is not met, we modify parameter is some way
//     // Usually, after modification, we call the same function again (or the function calls itself)
//     return doSomething(modifiedParameter);
//   }
// }

// Factorial of 5 is 5*4*3*2*1
function getFactorial(number) {
	if (number < 0 || typeof number !== 'number') {
		console.log('Please provide a number >= 0');
		return;
	} else {
		if (number === 0) {
			return 1;
		} else {
			return number * getFactorial(number - 1);
		}
	}
}
/* 
getFactorial(5)
  5 * getFactorial(4)
  5 * 4 * getFactorial(3)
  5 * 4 * 3 * getFactorial(2)
  5 * 4 * 3 * 2 * getFactorial(1)
  5 * 4 * 3 * 2 * 1 * getFactorial(0)
  5 * 4 * 3 * 2 * 1 * 1 
*/
console.log('5', getFactorial(5));
console.log('-26', getFactorial(-26));
console.log('String', getFactorial('sadasfasd'));
console.log('--------------');

// 1. Write a recursive function to print out all the elements of an array.
const arr = [1, 2, 30, 4, 5];
function printArrayElements(arr, i = 0) {
	if (i === arr.length) {
		return;
	} else {
		console.log(arr[i]);
		printArrayElements(arr, i + 1);
	}
}
printArrayElements(arr);

console.log('--------------');

// 2. Write a recursive function to capitalize the first letter of each word in a sentence.
const ex2sentence =
	'a recursive function to capitalize the first letter of each word in a sentence.  ';
function capitalizeLetter(sentence) {
	if (!sentence.trim().length) {
		// if length of the sentence is not a positive number
		return '';
	} else {
		const words = sentence.split(' ');
		const firstWord = words[0];
		const firstWordCapitalized =
			firstWord[0].toUpperCase() + firstWord.slice(1);

		return (
			firstWordCapitalized + ' ' + capitalizeLetter(words.slice(1).join(' '))
		);
	}
}

console.log(capitalizeLetter(ex2sentence));

// if ('sdasd')
// `if (!!'sasad')` is the same as `if (Boolean('sasad'))`
/*
1. Define function
2. Define base condition: if there no more words left in the sentence, exit
3. Split string into array of words
4. Take first element of array, capitalize the first letter
5. Call the function recursivly with the same sentence without the first word

*/
console.log('- - - - - - - - - - - - - - - - - ');
// 3. Write a recursive function to count the number of vowels in a string.
const sentenceEx4 = 'Hello, how are you?';
const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(string, index = 0, count = 0) {
	if (index === string.length) {
    return count;
	}

  if (vowels.includes(string[index])) {
    count = count + 1;
  }

  console.log('- - - - - - - - - - - - - - - - - ');
  // The issue was the missing 'return' keyword in the line below. We need to use return keyword in both base condition and here if we want the function to return the result (unlike ex. 1 where the result was only printed to terminal). If we omit return in the recursive call, the function will still run, but the accumulated count would not be returned to the initial call, resulting in undefined.
  return countVowels(string, index + 1, count);
}

console.log(countVowels(sentenceEx4));



function countVowelsLoop(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowelsLoop(sentenceEx4));

console.log('- - - - - - - - - - - - - - - - - ');

// 4. Write a recursive function to remove all occurrences of a specified character from a string.
const sentenceEx5 = 'Hello, how are you?';
const charToRemove = 'o';

function removeCharRecursive(sentence, charToRemove) {
    if (sentence.length === 0) {
        return '';
    } else {
        const firstChar = sentence[0];
        const restOfString = sentence.slice(1);
        if (firstChar === charToRemove) {
            return removeCharRecursive(restOfString, charToRemove);
        } else {
            return firstChar + removeCharRecursive(restOfString, charToRemove);
        }
    }
}

const result = removeCharRecursive(sentenceEx5, charToRemove);
console.log(result);


/*
const result = sentenceEx5.split(charToRemove).join('');
console.log(result);           this is easier:)
*/


console.log('- - - - - - - - - - - - - - - - - ');

// 5. Write a recursive function to check if an array includes a specific value.
const numbers = [1, 2, 3, 4, 5];
const valueToCheck = 3;
const valueToCheck2 = 6;

function includesValue(arr, value) {
    if (arr.length === 0) {
        return false;
    } else {
        const firstElement = arr[0];
        const restOfArray = arr.slice(1);
        if (firstElement === value) {
            return true;
        } else {
            return includesValue(restOfArray, value);
        }
    }
}

const result2 = includesValue(numbers, valueToCheck);
console.log(result2);

const result3 = includesValue(numbers, valueToCheck2);
console.log(result3);

console.log('- - - - - - - - - - - - - - - - - ');

// 6. Write a recursive function to flatten an object with nested objects into a single-level object.
const nestedObj = {
	name: 'John',
	age: 30,
	address: {
		street: '123 Main St',
		city: 'New York',
		country: 'USA',
	},
	hobbies: ['reading', 'coding'],
	social: {
		twitter: '@johndoe',
		linkedIn: 'johndoe',
	},
};
//This example is difficult, teacher

function flattenObject(obj, parentKey = '') {
    let result = {};
    for (let key in obj) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            const flatObject = flattenObject(obj[key], parentKey + key + '.');
            result = { ...result, ...flatObject };
        } else {
            result[parentKey + key] = obj[key];
        }
    }
    return result;
}

const flattenedObj = flattenObject(nestedObj);
console.log(flattenedObj);


console.log('- - - - - - - - - - - - - - - - - ');

// 7. Write a recursive function to find the maximum depth of a nested object.
const nestedObjEx7 = {
	a: 1,
	b: {
		c: 2,
		d: {
			e: 3,
			f: {
				g: 4,
			},
		},
	},
	h: 5,
};

function maxDepth(obj, depth = 1) {
    let max = depth;
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            max = Math.max(max, maxDepth(obj[key], depth + 1));
        }
    }
    return max;
}
const depth = maxDepth(nestedObjEx7);
console.log(depth);

console.log('- - - - - - - - - - - - - - - - - ');

// 8. Write a recursive function to reverse the order of words in a sentence.
const sentenceEx8 = 'Hello, how are you?';

function reverseWordsRecursive(sentence) {
    if (sentence === '') {
        return '';
    } else {
        const words = sentence.split(' ');
        const firstWord = words[0];
        const restOfSentence = words.slice(1).join(' ');
        return reverseWordsRecursive(restOfSentence) + (restOfSentence ? ' ' : '') + firstWord;
    }
}

const reversedSentence = reverseWordsRecursive(sentenceEx8);
console.log(reversedSentence);

console.log('- - - - - - - - - - - - - - - - - ');

// 9. Write a recursive function to find the length of the longest word in a sentence.
const sentenceEx9 = 'The quick brown fox jumps over the lazy dog';

function longestWordLength(sentence) {
    const words = sentence.split(' ');
    if (words.length === 1) {
        return words[0].length;
    } else {
        const firstWordLength = words[0].length;
        const restOfSentence = words.slice(1).join(' ');
        const restWordLength = longestWordLength(restOfSentence);
        return Math.max(firstWordLength, restWordLength);
    }
}

const longestLength = longestWordLength(sentenceEx9);
console.log(longestLength);

console.log('- - - - - - - - - - - - - - - - - ');

// 10. Write a recursive function to check if an object contains a specified property.
const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

function hasProperty(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
        return true;
    }
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            if (hasProperty(obj[key], prop)) {
                return true;
            }
        }
    }
    return false;
}
const propertyToCheck = 'city';
const hasProp = hasProperty(person, propertyToCheck);
console.log(hasProp);