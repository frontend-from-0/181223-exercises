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

  // The issue was the missing 'return' keyword in the line below. 
  //We need to use return keyword in both base condition 
  //and here if we want the function to return the result 
  //(unlike ex. 1 where the result was only printed to terminal). 
  //If we omit return in the recursive call, the function will still run, 
  //but the accumulated count would not be returned to the initial call, resulting in undefined.
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

function removeCharRecursive(str, charToReve) {
	if (str.length === 0) {
	  return '';
	}
	if (str[0] === charToRemove) {
	  return removeCharRecursive(str.slice(1), charToReve);
	} else {
	  return str[0] + removeCharRecursive(str.slice(1), charToReve);
	}
  }

  console.log(removeCharRecursive(sentenceEx5, charToRemove));

// 5. Write a recursive function to check if an array includes a specific value.
const numbers = [1, 2, 3, 4, 5];
const valueToCheck = 3;

function checkIfIncludes(arr, aSpecificValue) {
	if (arr.length ===0) {
		return false;
	}
	if (arr[0] === aSpecificValue) {
		return true;
	} else {
		return checkIfIncludes(arr.slice(1), aSpecificValue);
	}
}

const result = checkIfIncludes(numbers, valueToCheck);
console.log(result);

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

///maalesef bu da benim seviyemin cok ilerisinde ...


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

///maalesef bu da benim seviyemin cok ilerisinde ...

// 8. Write a recursive function to reverse the order of words in a sentence.
const sentenceEx8 = 'Hello, how are you?';

function reverseWords(sentence) {
	if (sentence === '') {
	  return '';
	}
	let words = sentence.split(' ');
	function reverseArray(arr) {
	  if (arr.length === 0) {
		return [];
	  }
	  return [arr.pop()].concat(reverseArray(arr));
	}
	let reversedWords = reverseArray(words);
	return reversedWords.join(' ');
  }
console.log('Ex.8: ');
console.log(reverseWords(sentenceEx8));


// 9. Write a recursive function to find the length of the longest word in a sentence.
const sentenceEx9 = 'The quick brown fox jumps over the lazy dog';


// IMKANSIZ, COK ZOR GELDI BU SORU, CHAT GPT BILE ISE YARAMADI :)


console.log('Ex.9: ');

// 10. Write a recursive function to check if an object contains a specified property.
const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

//BUGUNKU BILGIMLE BUNU DA YAPAMAM, BELKI 1-2 AY SONRA :)

console.log('Ex.10: ');