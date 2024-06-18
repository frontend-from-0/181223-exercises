// 1. Write a loop that prints out the numbers from 1 to 10.


for(let i=1; i<=10; i++){
        console.log(i);
    }
console.log('- - - - - - - - - - - - - - - - - ');


// 2. Write a loop that prints out the odd numbers from 1 to 20.

for(let i=1; i<=20; i++){
    if (i % 2 !== 0) {
        console.log(i);
    }
}
        
console.log('- - - - - - - - - - - - - - - - - ');


// 3. Write a loop that prints out the even numbers from 1 to 20.
// 2, 4, 6...

for(let i=1; i<=20; i++){
    if (i % 2 ==0) {
console.log(i);
}
}

console.log('- - - - - - - - - - - - - - - - - ');


// 4. Write a loop that finds the maximum number in an array of numbers.

const findMaxNumberInArray = [300, 1000, 23, 42, 300, 120, 7, 4, 90];

let maxNumber = findMaxNumberInArray[0]; // Assume the first element is the maximum initially

for (let i = 1; i < findMaxNumberInArray.length; i++) {
  if (findMaxNumberInArray[i] > maxNumber) {
    maxNumber = findMaxNumberInArray[i]; // Update maxNumber if a larger element is found
  }
}

console.log("The maximum number in the array is:", maxNumber);
console.log('- - - - - - - - - - - - - - - - - ');


// 5. Write a loop that finds the minimum number in an array of numbers.
const findMinNumberInArray = [1, 10, 23, 42, 0, 12, 7, 0];

let minNumber = findMinNumberInArray[0]; 

for (let i = 1; i < findMinNumberInArray.length; i++) {
  if (findMinNumberInArray[i] < minNumber) {
    minNumber = findMinNumberInArray[i]; 
  }
}
console.log("The minimum number in the array is:", minNumber);
console.log('- - - - - - - - - - - - - - - - - ');


// 6. Write a loop that reverses a given string.
const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

console.log('answer to number6: no answer - - - - - - - - - - - - ');

    
// 7. Write a while loop that counts from 10 to 1 and prints out each number.
console.log('answer to number7:');
let count = 10;

while (count >= 1) {
  console.log(count);
  count--;
}


// 8. Write a while loop that generates random numbers between 1 and 10 until a number greater than 8 is generated,
// and then prints out the total number of iterations.

let iterations = 0;
let randomNumber;

while (true) {
  randomNumber = Math.floor(Math.random() * 10) + 1; 
  iterations++; 

  console.log("Random number:", randomNumber);

  if (randomNumber > 8) {
    break; // Exit the loop if a number greater than 8 is generated
  }
}

console.log("Total iterations:", iterations);


console.log('- - - - - - - - - - - - - - - - - ');
// 9. Write a do-while loop that counts from 1 to 10 and prints out each number.

let text = ""
let i = 1;

do {
  text += "The number is: " + i;
  i++;
}
while (i<10);

console.log(text)

// 10. Write a for...in loop that prints out the keys and values of an object.
const person = { name: 'John', surname: 'Doe', age: 30, city: 'New York' };

for (let key in person) {
  console.log("Key:", key, "Value:", person[key]);
}


// 11. Write a for...in loop that sums the values of an object.

const obj = { a: 10, b: 20, c: 30, d: 23 };
let sum = 0;

for (let key in obj) {
  sum += obj[key];
}

console.log("The sum of the values:", sum);


// Excercises below are additional (as requested during the lesson)

// 12. Sum of Random Numbers: Write a do-while loop that generates random numbers between 1 and 5 and adds them together until the sum is greater than 20. Print the total number of iterations and the final sum.

// 13. Count Even Numbers: Write a for loop that generates and checks 100 random numbers between 1 and 50. Count how many even numbers are generated and print the count at the end.

// 14. Find First Prime Number: Write a while loop that generates random numbers between 1 and 100 until it finds a prime number. Print the prime number (https://www.techtarget.com/whatis/definition/prime-number#:~:text=A%20prime%20number%20is%20a,%2C%2019%2C%2023%20and%2029.) and the number of iterations it took to find it.

// 15. Accumulate Multiples of Three: Write a while loop that continuously generates random numbers between 1 and 15. Stop the loop once the sum of numbers that are multiples of three exceeds 50. Print the final sum and the total number of multiples of three.

// 16. Array Element Doubling: Write a for loop that iterates over an array of numbers (e.g., [1, 2, 3, 4, 5]). For each iteration, double the value of each element and store the results in a new array. Print the original and the new array at the end.

// 17. Count Down Timer: Write a for loop that starts from 30 and counts down to zero, printing each number. However, it should print "Halfway there!" when it reaches 15, and "Almost done!" when it reaches 5.

// 18. Palindrome Checker: Write a for loop that checks whether a given string is a palindrome (a word that reads the same backward as forward, like "radar" or "level"). The loop should iterate over the string and compare characters from the beginning and the end, moving towards the center. Print whether or not the string is a palindrome.
