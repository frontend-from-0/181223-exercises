// 3. Write a function that asks the user to enter two numbers and checks if the first number is greater than, 
//less than, or equal to the second number using if else statement.

function compareNumbers(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}`);
    } else if (num1 < num2) {
        console.log(`${num1} is less than ${num2}`);
    } else {
        console.log(`${num1} is equal to ${num2}`);
    }
}
compareNumbers(4, 9);
compareNumbers(4, 4);
compareNumbers(25, 7);
console.log('--------------');

// 5. Write a function that takes in a number and checks if it's positive, negative, or zero using if else statement.

function checkNumber(number) {
    if (number > 0) {
        console.log(`${number} is positive`);
    } else if (number < 0) {
        console.log(`${number} is negative`);
    } else {
        console.log(`${number} is zero`);
    }
}
checkNumber(4);
checkNumber(0);
checkNumber(-6);
console.log('--------------');

// 6. Write a function that takes in a year and checks if it's a leap year (is divisible by 4 and not divisible by 100 OR divisible by 400)
// or not using if else statement.
function leapYear(year) {
    if (year % 4 == 0 && year % 100 !== 0) {
        console.log(`${year} is a leap year`);
    } else if (year % 400 == 0) {
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
}
leapYear(2000);
leapYear(2024);
leapYear(2021);
console.log('--------------');

// 7. Write a function that takes in a temperature and checks if it's above or below freezing using if else statement.

function checkFreezingTemperature(temp) {
    if (temp <= 0) {
        console.log(`${temp} is below the freezing`);
    } else {
        console.log(`${temp} is above the freezing`);
    }
}
checkFreezingTemperature(12);
checkFreezingTemperature(-6);
console.log('--------------');

// 8. Write a function that takes in a person's height and weight and checks if they are considered underweight, normal, overweight, or obese using if else statement.
// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness.
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity

function calculateBMI(height, weight) {
    let BMI = weight / (height * height);
    if (BMI < 18.5) {
        console.log(`This person's BMI=${BMI} - Underweight`);
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        console.log(`This person's BMI=${BMI} - Healty weight`);
    } else if (BMI >= 25 && BMI <= 29.9) {
        console.log(`This person's BMI=${BMI} - Overweight`);
    } else {
        console.log(`This person's BMI=${BMI} - Obesity`);
    }
}

calculateBMI(1.70, 40);
calculateBMI(1.70, 70);
calculateBMI(1.70, 80);
calculateBMI(1.70, 120);
console.log('--------------');

// 9. Write a function that takes in a person's age and checks if they are a child (age 0-12), teenager (age 13-19), 
//adult (age 20-64), or senior citizen (age 65 and above) using if else statement.

function checkAge(age) {
    if (age > 0 && age <= 12) {
        console.log('This person is a child');
    } else if (age >= 13 && age <= 19) {
        console.log('This person is a teenager');
    } else if (age >= 20 && age <= 64) {
        console.log('This person is a adult');
    } else if (age >= 65) {
        console.log('This person is a senior citizen');
    }
}
checkAge(5);
checkAge(25);
checkAge(35);
checkAge(65);

console.log('--------------');

// 10. Write a function that takes age as a number and whether they are a student (yes or no). 
//If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote". 
//If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote". 
//If the age is greater than 65, print "You are a senior citizen". 
//If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote".

function checkVoting(isStudent, age) {
    if (isStudent === 'yes' && age < 18) {
        console.log("You are a student and not old enough to vote");
    } else if (isStudent === 'no' && (age >= 18 && age <= 65)) {
        console.log("You are eligible to vote");
    } else if (age > 65) {
        console.log("You are a senior citizen");
    } else if (isStudent === 'yes' && age >= 18) {
        console.log("You are old enough to vote");
    }
}

checkVoting('yes', 12);
checkVoting('no', 35);
checkVoting('', 70);
checkVoting('yes', 20);
console.log('--------------');

// 11. Write a function that asks the user to enter their salary and their years of experience. 
//If the salary is less than $30,000 and the years of experience are less than 5, print "Sorry, we cannot offer you the job at this time".
// If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), print "We can offer you the job at a lower salary". 
//If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, print "We can offer you the job at the requested salary".

function getUserDetails(salary, experience) {
    if (salary < 30000 && experience < 5) {
        console.log("Sorry, we cannot offer you the job at this time");
    } else if (salary < 50000 && (experience >= 5 && experience <= 10)) {
        console.log("We can offer you the job at a lower salary");
    } else if (salary > 50000 && experience > 10) {
        console.log("We can offer you the job at the requested salary");
    }
}
getUserDetails(5000, 4);
getUserDetails(40000, 8);
getUserDetails(65000, 12);

console.log('--------------');

// 12. Write a function that asks the user to enter their score on a test. If the score is less than 60, print "You failed the test". 
//If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". 
//If the score is between 71 and 80 (inclusive), print "You got a B". 
//If the score is between 81 and 90 (inclusive), print "You got an A". 
//If the score is greater than 90, print "You got an A+ - Great job!".

function gradeScore(score) {
    if (score < 60) {
        console.log("You failed the test");
    } else if (score >= 60 && score <= 70) {
        console.log("You passed the test, but your grade is not great");
    } else if (score >= 71 && score <= 80) {
        console.log("You got a B");
    } else if (score >= 81 && score <= 90) {
        console.log("You got a A");
    } else {
        console.log("You got an A+ - Great job!");
    }
}

gradeScore(50);
gradeScore(65);
gradeScore(75);
gradeScore(85);
gradeScore(95);
console.log('--------------');

// 14. Write a function that asks the user to enter a grade letter (A, B, C, D, or F) and 
//displays a message indicating whether the grade is passing (A, B, C) or failing (D, F). 
//Use a switch statement to handle the different cases.

function checkGrade(grade){
    switch(grade){
    case 'A':
    case 'B':
    case 'C':
        console.log('Passing');
        break;
    case 'D':
    case 'F':
        console.log('Failing');
        break;
    }
}

checkGrade('A');
checkGrade('F');
console.log('--------------');

// 15. Write a function that asks the user to enter their age, 
//and then calculates and displays their age in dog years 
//(where one human year is equivalent to seven dog years). 
//If the user enters a negative number or zero, display an error message.

function calculateDogAge(age){
    let dogAge=age*7;
    if(age>0){
        console.log(`Your dog age is ${dogAge}`);
    } else{
        console.log('Please enter a valid age');
    }
}
calculateDogAge(5);
calculateDogAge(-6);
calculateDogAge(0);