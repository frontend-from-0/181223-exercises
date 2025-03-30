// 1. Write a loop that prints out the numbers from 1 to 10.
console.log("Exercise 1");
for(let i=1; i<11; i++){
console.log(i);
}

// 2. Write a loop that prints out the odd numbers from 1 to 20.
console.log("Exercise 2");
for(let i=1; i<=20; i+=2){
    console.log(i);
}
// 3. Write a loop that prints out the even numbers from 1 to 20.
// 2, 4, 6...

console.log("Exercise 3");
for(let i=2; i<=20; i+=2){
   console.log(i);
}

// 4. Write a loop that finds the maximum number in an array of numbers.
console.log("Exercise 4");
const findMaxNumberInArray = [300, 1000, 23, 42, 300, 120, 7, 4, 90];
let maxNumber= findMaxNumberInArray[0];
for (let j=0; j<findMaxNumberInArray.length; j++){
    if (findMaxNumberInArray[j]>maxNumber){
        maxNumber=findMaxNumberInArray[j];
    }   
}
console.log(maxNumber);

// 5. Write a loop that finds the minimum number in an array of numbers.
console.log("Exercise 5");
const findMinNumberInArray = [1, 10, 23, 42, 0, 12, 7, 0];
let minNumber=findMinNumberInArray[0];
for (let m=0; m<findMinNumberInArray.length; m++){
    if (findMinNumberInArray[m]<minNumber){
        minNumber = findMinNumberInArray[m];
    }
}
console.log(minNumber);

// 6. Write a loop that reverses a given string.
console.log("Exercise 6");
const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
let reversedString;
for (let y=string.length; y>=0; y--){
    reversedString += string [y];
}
console.log(reversedString);

// 7. Write a while loop that counts from 10 to 1 and prints out each number.
console.log("Exercise 7");
let i=10;
while(i>=1){
    console.log(i);
    i--;
}

// 8. Write a while loop that generates random numbers between 1 and 10 until a number greater than 8 is generated, and then prints out the total number of iterations.
console.log("Exercise 8");
let iterationsCount = 0;
let chosenNumber = 0;
while (chosenNumber<=8){
    chosenNumber = Math.floor(Math.random()*10)+1;
    console.log(chosenNumber);
    iterationsCount++;
}
console.log("Total iterations "+ iterationsCount);


// 9. Write a do-while loop that counts from 1 to 10 and prints out each number.
console.log("Exercise 9");
let c=1;
do{
    console.log(c);
    c++;
}
while (c<11);

// 10. Write a for...in loop that prints out the keys and values of an object.
console.log("Exercise 10");
const person = { name: 'John', surname: 'Doe', age: 30, city: 'New York' };
for (let info in person){
    console.log(info + ": " + person[info]);
}
 

// 11. Write a for...in loop that sums the values of an object.
console.log("Exercise 11");
const obj = { a: 10, b: 20, c: 30, d: 23 };
let sum = 0;
for (let numbers in obj){
    sum += obj[numbers];
    console.log ("the sum of the numbers are" + sum);
}


// Excercises below are additional (as requested during the lesson)

// 12. Sum of Random Numbers: Write a do-while loop that generates random numbers between 1 and 5 and adds them together until the sum is greater than 20. Print the total number of iterations and the final sum.
console.log("Exercise 12");
let totalResult = 0;
let totalIterations = 0;
do{
 let randomNum = Math.floor(Math.random()*5)+1;
 totalResult += randomNum;
 console.log(totalResult);
 totalIterations++;
}
while(totalResult<=20);
console.log("iterations : " + totalIterations);
console.log("total result : " + totalResult );


// 13. Count Even Numbers: Write a for loop that generates and checks 100 random numbers between 1 and 50. Count how many even numbers are generated and print the count at the end.
console.log("Exercise 13");
let iteration = 0;
let evenNumbersCount =0;
do{
let randomNumber = Math.floor(Math.random()*50)+1; 
console.log(randomNumber);   
iteration++;
if (randomNumber %2 ===0){
    evenNumbersCount++;
};
console.log(evenNumbersCount);
}
while(iteration<=100);


  



// 14. Find First Prime Number: Write a while loop that generates random numbers between 1 and 100 until it finds a prime number. Print the prime number (https://www.techtarget.com/whatis/definition/prime-number#:~:text=A%20prime%20number%20is%20a,%2C%2019%2C%2023%20and%2029.) and the number of iterations it took to find it.
console.log("Exercise 14");
let iterationNum = 0;
let totIterations = 0;
let primeNumber;
do{
    let isPrime = true;
    let allNum =  Math.floor(Math.random()*100)+1; 
    for (let i=2; i<= Math.sqrt(allNum); i++){
        if (allNum %i === 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime && allNum>1){
        primeNumber = allNum;
        break;
    }
    iterationNum++;
}
while (totIterations <=100);
console.log("iterations" + iterationNum);
console.log("prime number"+ primeNumber);


// 15. Accumulate Multiples of Three: Write a while loop that continuously generates random numbers between 1 and 15. Stop the loop once the sum of numbers that are multiples of three exceeds 50. Print the final sum and the total number of multiples of three.
console.log("Exercise 15");
let randNumber = 0;
let totalMultiplesOfThree = 0; 
let resultSum = 0;

while (resultSum<=50){
    randNumber = Math.floor(Math.random()*15)+1;

    if (randNumber%3===0){
         resultSum += randNumber;
         totalMultiplesOfThree++;
    }

}
console.log("total sum"+ resultSum);
console.log("total number :" + totalMultiplesOfThree);


// 16. Array Element Doubling: Write a for loop that iterates over an array of numbers (e.g., [1, 2, 3, 4, 5]). For each iteration, double the value of each element and store the results in a new array. Print the original and the new array at the end.
console.log("Exercise 16");
let arr=[2,3,4,5];
let newArr=[];
for (let y=0; y <arr.length; y++){
    let doubledValue = arr[y]*2;
    newArr.push(doubledValue);
}
console.log("the original array: "+arr);
console.log("new array: "+newArr);


// 17. Count Down Timer: Write a for loop that starts from 30 and counts down to 
console.log("Exercise 17");
for (let i=30; i>0; i--){
  console.log(i);  
}



// 18. Palindrome Checker: Write a for loop that checks whether a given string is a palindrome (a word that reads the same backward as forward, like "radar" or "level"). The loop should iterate over the string and compare characters from the beginning and the end, moving towards the center. Print whether or not the string is a palindrome.
console.log("Exercise 18");
const stringTest= "level";
let isPalindrome=true;
for (let i=0; i<stringTest.length/2; i++){
    if (stringTest[i] !== stringTest[stringTest.length-1-i] ){
        isPalindrome = false;
        break;
    }
} 

console.log(isPalindrome);