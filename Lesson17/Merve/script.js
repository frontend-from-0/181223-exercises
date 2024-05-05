// 1. Write a loop that prints out the numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log('- - - - - - - - - - - - - - - - - ');
// 2. Write a loop that prints out the odd numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
        console.log(i);
}
console.log('- - - - - - - - - - - - - - - - - ');
// 3. Write a loop that prints out the even numbers from 1 to 20.
// 2, 4, 6...
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
console.log('- - - - - - - - - - - - - - - - - ');
// 4. Write a loop that finds the maximum number in an array of numbers.
const findMaxNumberInArray = [300, 1000, 23, 42, 300, 12, 7, 4, 90];
let maxNumber = findMaxNumberInArray[0];
for (let i = 1; i < findMaxNumberInArray.length; i++) {
	if (findMaxNumberInArray[i] > maxNumber) {
		maxNumber = findMaxNumberInArray[i];
	}
}
console.log(maxNumber);
// 5. Write a loop that finds the minimum number in an array of numbers.
const findMinNumberInArray = [1, 10, 23, 42, 0, 12, 7, 0];
let minNumber = findMinNumberInArray[0];
for (let i = 1; i < findMinNumberInArray.length; i++) {
	if (findMinNumberInArray[i] < minNumber) {
		minNumber <= findMinNumberInArray[i];
	}
}
console.log(minNumber);
// 6. Write a loop that reverses a given string.
const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
let reversedString = '';
for (let i = string.length - 1; i >= 0; i--) {
	reversedString += string[i];
}
console.log('reversedString', reversedString);
// 7. Write a while loop that counts from 10 to 1 and prints out each number.
let u = 10;
while (u >= 1) {
	console.log(u);
	u--;
}
console.log('- - - - - - - - - - - - - - - - - ');
// 8. Write a while loop that generates random numbers between 1 and 10 until a number greater than 8 is generated, and then prints out the total number of iterations.
let iterations = 0;
let randomNumber = 0;
while (randomNumber <= 8 && iterations < 2) {
	randomNumber = Math.floor(Math.random() * 10) + 1;
	iterations++;
	console.log('Current randomNumber', randomNumber);
}
console.log('- - - - - - - - - - - - - - - - - ');
// 9. Write a do-while loop that counts from 1 to 10 and prints out each number.
do {
    console.log(i);
    i++;
} while (i <= 10);
console.log('- - - - - - - - - - - - - - - - - ');
// 10. Write a for...in loop that prints out the keys and values of an object.
const person = { name: 'John', surname: 'Doe', age: 30, city: 'New York' };
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
// 11. Write a for...in loop that sums the values of an object.
const obj = { a: 10, b: 20, c: 30, d: 23 };
var sum = 0;  //first i did use "let" but cursor keep giving warnings like : Cannot redeclare block-scoped variable 'sum'. \\
for (let key in obj) {
  sum += obj[key];
}
console.log(sum);
// Excercises below are additional (as requested during the lesson)

// 12. Sum of Random Numbers: Write a do-while loop that generates random numbers between 1 and 5 and adds them together until the sum is greater than 20. Print the total number of iterations and the final sum.
let sum = 0;
let evenCount = 0;
do {
    sum += Math.floor(Math.random() * 5) + 1;
    evenCount++;
    console.log(sum);
} while (sum <= 20);

console.log(`Total even numbers: ${evenCount}`);
// 13. Count Even Numbers: Write a for loop that generates and checks 100 random numbers between 1 and 50. Count how many even numbers are generated and print the count at the end.
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// 14. Find First Prime Number: Write a while loop that generates random numbers between 1 and 100 until it finds a prime number. Print the prime number (https://www.techtarget.com/whatis/definition/prime-number#:~:text=A%20prime%20number%20is%20a,%2C%2019%2C%2023%20and%2029.) and the number of iterations it took to find it.
while (true) {
    let number = Math.floor(Math.random() * 100) + 1;
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(number);
        break;
    }
}

// 15. Accumulate Multiples of Three: Write a while loop that continuously generates random numbers between 1 and 15. Stop the loop once the sum of numbers that are multiples of three exceeds 50. Print the final sum and the total number of multiples of three.
while (true) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < 15; i++) {
        let randomNumber = Math.floor(Math.random() * 15) + 1;
        sum += randomNumber;
        if (randomNumber % 3 === 0) {
            count++;
        }
        if (sum > 50) {
            break;
        }
    }
    console.log(`Sum: ${sum}, Count: ${count}`);
    if (sum > 50) {
        break;
    }
}
// 16. Array Element Doubling: Write a for loop that iterates over an array of numbers (e.g., [1, 2, 3, 4, 5]). For each iteration, double the value of each element and store the results in a new array. Print the original and the new array at the end.
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    numbers[i] *= 2;
    let doubleNumbers = [];
}
console.log(numbers);

// 17. Count Down Timer: Write a for loop that starts from 30 and counts down to zero, printing each number. However, it should print "Halfway there!" when it reaches 15, and "Almost done!" when it reaches 5.
for (let i = 30; i >= 0; i--) {
    if (i === 15) {
        console.log('Halfway there!');
    } else if (i === 5) {
        console.log('Almost done!');
    } else {
        console.log(i);
    }
}
// 18. Palindrome Checker: Write a for loop that checks whether a given string is a palindrome (a word that reads the same backward as forward, like "radar" or "level"). The loop should iterate over the string and compare characters from the beginning and the end, moving towards the center. Print whether or not the string is a palindrome.
for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        console.log('Not a palindrome');
        break;
    }
    if (i === str.length / 2 - 1) {
        console.log('Palindrome');
    }
}   