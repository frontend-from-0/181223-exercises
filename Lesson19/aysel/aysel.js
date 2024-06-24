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

// 4. Write a recursive function to remove all occurrences of a specified character from a string.
const sentenceEx5 = 'Hello, how are you?';
const charToRemove = 'o';

function removeOccurrences(string, charToRemove) {
    if (string === '') {
        return '';
    }

    if (string[0] === charToRemove) {
        return removeOccurrences(string.slice(1), charToRemove);
    } else {
        return string[0] + removeOccurrences(string.slice(1), charToRemove);
    }
}

console.log(removeOccurrences(sentenceEx5, charToRemove));

// 5. Write a recursive function to check if an array includes a specific value.
const numbers = [1, 2, 3, 4, 5];
const valueToCheck = 3;
function findSpecificValue(array, valueToCheck) {
    if (array.length === 0) {
        return false;
    }

    if (array[0] === valueToCheck) {
        return true;
    }

    return findSpecificValue(array.slice(1), valueToCheck);
}

console.log(findSpecificValue(numbers, valueToCheck));


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

function flattenObject (obj, parentKey = '', result = {}) {
	for (let key in obj) {
	  if (obj.hasOwnProperty(key)) {
		const newKey = parentKey ? `${parentKey}.${key}` : key;
		if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
		  flattenObject(obj[key], newKey, result);
		} else {
		  result[newKey] = obj[key];
		}
	  }
	}
	return result;
  };
  console.log(flattenObject(nestedObj));
  

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
const maxDepth = (obj) => {
	let max = 1; 
	for (let key in obj) {
	  if (typeof obj[key] === 'object' && obj[key] !== null) {
		const depth = maxDepth(obj[key]) + 1;
		max = Math.max(max, depth);
	  }
	}

	return max;
  };
  

  console.log(maxDepth(nestedObjEx7));
  
// 8. Write a recursive function to reverse the order of words in a sentence.
const sentenceEx8 = 'Hello, how are you?';
const reverseWords = (sentence) => {
	const words = sentence.split(' ');
  
	const reversedWords = [];
  
	for (let i = words.length - 1; i >= 0; i--) {
	  reversedWords.push(words[i]);
	}
  
	return reversedWords.join(' ');
  };
  

  const reversedSentence = reverseWords(sentenceEx8);
  console.log(reversedSentence);
  


// 9. Write a recursive function to find the length of the longest word in a sentence.
const sentenceEx9 = 'The quick brown fox jumps over the lazy dog';
function findLongestWord(words) {
	if (words.length === 0) {
	  return 0;
	} else {
	  const firstWordLength = words[0].length;
	  const maxLengthOfOtherWords = findLongestWord(words.slice(1)); 
	  return Math.max(firstWordLength, maxLengthOfOtherWords);
	}
}

console.log(findLongestWord(sentenceEx9.split(' ')));
  
  
// 10. Write a recursive function to check if an object contains a specified property.
const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};
function containsProperty (obj, property) {
	
	for (let key in obj) {

	  if (key === property) {
		return true;
	  }
	  
	  if (typeof obj[key] === 'object' && obj[key] !== null) {
		if (containsProperty(obj[key], property)) {
		  return true;
		}
	  }
	}
	
	
	return false;
  };
  
  
  console.log(containsProperty(person, 'city')); 
  console.log(containsProperty(person, 'street')); 
