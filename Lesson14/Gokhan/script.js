// 9. Declare a variable number6 and initialize it to 6. 
//Declare a variable number7 and initialize it to `++number6` (number6 incremented using prexif ++ operator). Log both values to the console.

let number6 = 6;
const number7 = ++number6;
console.log('excersize 9 ${number6} #{number7}');

// 10. Declare a variable number8 and initialize it to 8.
//Declare a variable number9 and initialize it to `number8++` (number8 incremented using postfix ++ operator). Log both values to the console.

const number8 = 8;
const number9 = 8++;
console.log('exercise10 #{number8} ${number9}');

// 11. Declare a variable number10 and initialize it to -3. Use the postfix ++ operator to increment the value of num by 1, 
//then multiply the result by 2 and log it to the console.

const number10 = -3;
const number11 = ++number10;
const result11 = number11 * 2;
console.log('exercise11');

// 12. Declare two variables a and b and initialize them to 2 and 3, respectively. 
//Use the prefix ++ operator to increment the value of a by 1, then add b to the result and log it to the console.

let a = 2;
++a;
const b = 3;
const result12 = a + b;
console.log('result12');
