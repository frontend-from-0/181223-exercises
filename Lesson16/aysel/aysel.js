// 3. Write a function that asks the user to enter two numbers and checks if the first number is greater than, less than, or equal to the second number using if else statement.
function compareNumbers(firstNumber, secondNumber){
    if(firstNumber>secondNumber){
        console.log('First Number is bigger than the second number');
    }
    else if(secondNumber>firstNumber){
        console.log('Second number is bigger than the first number');
    }
    else{
        console.log('The first number is equal to the second number');
    }
}
compareNumbers(4,5);
compareNumbers(8,5);
compareNumbers(5,5);

// 5. Write a function that takes in a number and checks if it's positive, negative, or zero using if else statement.
function negativeOrPositiveNumber(number){
    if(number>0){
        console.log('It\'s a positive number');
    }
    else if(number<0){
        console.log('It\'s a negative number');
    }
    else{
        console.log('It\'s a zero number');
    }
    }
    negativeOrPositiveNumber(7);
    negativeOrPositiveNumber(-7);
    negativeOrPositiveNumber(0);


// 6. Write a function that takes in a year and checks if it's a leap year (is divisible by 4 and not divisible by 100 OR divisible by 400) or not using if else statement.
function isLeapYear(year){
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        console.log('It\'s a leap year');
    }
    else{
        console.log('It\'s not a leap year');
    }

}
isLeapYear(4000);
isLeapYear(2024);
isLeapYear(1881);
isLeapYear(3500);

// 7. Write a function that takes in a temperature and checks if it's above or below freezing using if else statement.
function checkTemperature (temp){
    if(temp>0){
        console.log('It\'s above freezing temperature');
    }
    else if(temp<0){
        console.log('It\'s below freezing temperature');
    }
    else{
        console.log('It\'s  freezing temperature');
    }
}

checkTemperature(0)
checkTemperature(-15)
checkTemperature(6)


// 8. Write a function that takes in a person's height and weight and checks if they are considered underweight, normal, overweight, or obese using if else statement.
// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness.
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity

function checkBMI(weight, height) {
    
    let bmi = weight / (height * height);

  
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Healthy Weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}


console.log(checkBMI(70,1.72));
console.log(checkBMI(190,1.82));
console.log(checkBMI(40,1.72));


// 9. Write a function that takes in a person's age and checks if they are a child (age 0-12), teenager (age 13-19), adult (age 20-64), or senior citizen (age 65 and above) using if else statement.
function checkAges(age){
    if(age>=0 && age<=12){
        console.log('You are a child');
    }
    else if(age>=13 && age<=19){
        console.log('You are a teenager');
    }
    else if(age>=20 && age<=64){
        console.log('You are an adult');
    }
    else{
        console.log('You are a senior citizen');
    }
}
checkAges(3);
checkAges(13);
checkAges(23);
checkAges(73);
// 10. Write a function that takes age as a number and whether they are a student (yes or no). If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote". If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen". If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote".
function checkVoterEligibility(age, isStudent) {
    if (age < 18 && isStudent) {
        console.log("You are a student and not old enough to vote");
    } else if (age >= 18 && age <= 65 && !isStudent) {
        console.log("You are eligible to vote");
    } else if (age > 65) {
        console.log("You are a senior citizen");
    } else if (isStudent && age >= 18) {
        console.log("You are old enough to vote");
    } 
}

checkVoterEligibility(17, "yes"); 
checkVoterEligibility(70, "no"); 
checkVoterEligibility(20, "yes"); 

// 11. Write a function that asks the user to enter their salary and their years of experience. If the salary is less than $30,000 and the years of experience are less than 5, print "Sorry, we cannot offer you the job at this time". If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), print "We can offer you the job at a lower salary". If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, print "We can offer you the job at the requested salary".
function hireEmployee(salary, experience){
    if(salary<30.000 && experience<5){
        console.log('Sorry, we cannot offer you the job at this time');
    }
    else if(salary<50.000 && experience>=5 && experience<10 ){
        console.log('We can offer you the job at a lower salary');
    }
    else if(salary>=50.000 && experience>=10){
        console.log('We can offer you the job at the requested salary');
    }
}
hireEmployee(25.000, 3);
hireEmployee(75.000, 12);
hireEmployee(25.000, 8);


// 12. Write a function that asks the user to enter their score on a test. If the score is less than 60, print "You failed the test". If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". If the score is between 71 and 80 (inclusive), print "You got a B". If the score is between 81 and 90 (inclusive), print "You got an A". If the score is greater than 90, print "You got an A+ - Great job!".

function checkTestScore(score) {
if (score < 60) {
    console.log("You failed the test");
} else if (score >= 60 && score <= 70) {
    console.log("You passed the test, but your grade is not great");
} else if (score >= 71 && score <= 80) {
    console.log("You got a B");
} else if (score >= 81 && score <= 90) {
    console.log("You got an A");
} else if (score > 90) {
    console.log("You got an A+ - Great job!");
}
}
checkTestScore(55);
checkTestScore(65);
checkTestScore(75);
checkTestScore(95);

// 14. Write a function that asks the user to enter a grade letter (A, B, C, D, or F) and displays a message indicating whether the grade is passing (A, B, C) or failing (D, F). Use a switch statement to handle the different cases.
function checkGrade(grade) {
    switch (grade.toUpperCase()) {
        case 'A':
        case 'B':
        case 'C':
            console.log("Your grade is passing.");
            break;
        case 'D':
        case 'F':
            console.log("Your grade is failing.");
            break;
        default:
            console.log("Invalid grade entered. Please enter a valid grade (A, B, C, D, or F).");
            break;
    }
}

checkGrade('a');
checkGrade('B');
checkGrade('f');
checkGrade('D');
checkGrade('c');

// 15. Write a function that asks the user to enter their age, and then calculates and displays their age in dog years (where one human year is equivalent to seven dog years). If the user enters a negative number or zero, display an error message.
function convertToDogAge(humanAge) {
    if (humanAge > 0) {
        let dogAge = 7 * humanAge;
        console.log('You are ' + dogAge + ' years old in dog years.');
    } else {
        console.log('Error: Please enter a positive number.');
    }
}

convertToDogAge(16);
convertToDogAge(57);
convertToDogAge(0);
convertToDogAge(-3);