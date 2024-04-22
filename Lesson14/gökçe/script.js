// 9. Declare a variable number6 and initialize it to 6. Declare a variable number7 and initialize it to `++number6` (number6 incremented using prexif ++ operator). Log both values to the console.
let number6= 6 ;
const number7= ++number6;
console.log(number6,number7);
// 10. Declare a variable number8 and initialize it to 8. Declare a variable number9 and initialize it to `number8++` (number8 incremented using postfix ++ operator). Log both values to the console.
let number8=8;
let number9= number8++;
console.log(number8,number9);
// 11. Declare a variable number10 and initialize it to -3. Use the postfix ++ operator to increment the value of num by 1, then multiply the result by 2 and log it to the console.
let number10=-3;
number10++;
const number11= (number10 * 2);
console.log(number10,number11);

// 12. Declare two variables a and b and initialize them to 2 and 3, respectively. Use the prefix ++ operator to increment the value of a by 1, then add b to the result and log it to the console.
let a=2;
let b=3;
a++;
let result=a+b;
console.log(result);