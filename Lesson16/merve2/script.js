// 3. Write a function that asks the user to enter two numbers and checks if the first number is greater than,
// less than, or equal to the second number using if else statement.
/*
function compareTwoNumbers() {
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");
    
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (num1 > num2) {
        console.log("The first number is greater than the second number.");
    } else if (num1 < num2) {
        console.log("The first number is less than the second number.");
    } else {
        console.log("The first number is equal to the second number.");
    }
}
compareTwoNumbers(3,6);
compareTwoNumbers(7,7);
compareTwoNumbers(12,5);

console.log('------------------------');
*/
// 5. Write a function that takes in a number and checks if it's positive, negative, or zero using if else statement.

function checkNumberSign(number) {
    if (number > 0) {
        console.log("The number is positive.");
    } else if (number < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}
checkNumberSign(5);
checkNumberSign(-4);
checkNumberSign(0);
console.log('------------------------');
// 6. Write a function that takes in a year and checks if it's a leap year (is divisible by 4 and 
//not divisible by 100 OR divisible by 400) or not using if else statement.

function checkLeapYear(year) {
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}
checkLeapYear(2024);
checkLeapYear(2000);
checkLeapYear(2010);
console.log('------------------------');
// 7. Write a function that takes in a temperature and checks if it's above or below freezing using if else statement.

function checkTemperature(temp) {
    if (temp > 0) {
        console.log("The temperature is above freezing.");
    } else if (temp < 0) {
        console.log("The temperature is below freezing.");
    } else {
        console.log("The temperature is at the freezing point.");
    }
}
checkTemperature(-5);
checkTemperature(40);
checkTemperature(0);
console.log('------------------------');
// 8. Write a function that takes in a person's height and weight and checks if they are considered underweight, normal, overweight, or obese using if else statement.
// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness.
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity

function checkBMI(weight, height) {
    let bmi = weight / (height * height); // BMI calculation

    if (bmi < 18.5) {
        console.log("Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("Healthy Weight");
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        console.log("Overweight");
    } else if (bmi >= 30.0) {
        console.log("Obesity");
    }
}
checkBMI(40,1.63);
checkBMI(60,1.80);
checkBMI(80,1.50);
console.log('------------------------');
// 9. Write a function that takes in a person's age and checks if they are a child (age 0-12), 
//teenager (age 13-19), adult (age 20-64), or senior citizen (age 65 and above) using if else statement.

function checkAgeCategory(age) {
    if (age >= 0 && age <= 12) {
        console.log("Child");
    } else if (age >= 13 && age <= 19) {
        console.log("Teenager");
    } else if (age >= 20 && age <= 64) {
        console.log("Adult");
    } else if (age >= 65) {
        console.log("Senior Citizen");
    } else {
        console.log("Invalid age");
    }
}
checkAgeCategory(5);
checkAgeCategory(35);
checkAgeCategory(70);
checkAgeCategory(-5);
console.log('------------------------');
// 10. Write a function that takes age as a number and whether they are a student (yes or no).
// If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote".
// If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote". 
//If the age is greater than 65, print "You are a senior citizen". 
//If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote".

function checkVotingEligibility(age, isStudent) {
    if (age < 18 && isStudent === "yes") {
        console.log("You are a student and not old enough to vote.");
    } else if (age >= 18 && age <= 65 && isStudent === "no") {
        console.log("You are eligible to vote.");
    } else if (age > 65) {
        console.log("You are a senior citizen.");
    } else if (isStudent === "yes" && age >= 18) {
        console.log("You are old enough to vote.");
    }
}
checkVotingEligibility(35,"no"),
checkVotingEligibility(70);
checkVotingEligibility(12,"yes");
console.log('------------------------');
// 11. Write a function that asks the user to enter their salary and their years of experience.
// If the salary is less than $30,000 and the years of experience are less than 5, 
//print "Sorry, we cannot offer you the job at this time". 
//If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), 
//print "We can offer you the job at a lower salary". 
//If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, 
//print "We can offer you the job at the requested salary".

function evaluateJobOffer(salary, yearsOfExperience) {
    if (salary < 30000 && yearsOfExperience < 5) {
        console.log("Sorry, we cannot offer you the job at this time.");
    } else if (salary < 50000 && yearsOfExperience >= 5 && yearsOfExperience <= 10) {
        console.log("We can offer you the job at a lower salary.");
    } else if (salary >= 50000 || yearsOfExperience > 10) {
        console.log("We can offer you the job at the requested salary.");
    }
}

evaluateJobOffer(20000,4);
evaluateJobOffer(30000,7);
console.log('------------------------');
// 12. Write a function that asks the user to enter their score on a test.
// If the score is less than 60, print "You failed the test". 
//If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". 
//If the score is between 71 and 80 (inclusive), print "You got a B". 
//If the score is between 81 and 90 (inclusive), print "You got an A".
// If the score is greater than 90, print "You got an A+ - Great job!".

function evaluateTestScore(score) {
    if (score < 60) {
        console.log("You failed the test.");
    } else if (score >= 60 && score <= 70) {
        console.log("You passed the test, but your grade is not great.");
    } else if (score >= 71 && score <= 80) {
        console.log("You got a B.");
    } else if (score >= 81 && score <= 90) {
        console.log("You got an A.");
    } else if (score > 90) {
        console.log("You got an A+ - Great job!");
    }
}

evaluateTestScore(50);
evaluateTestScore(80);
console.log('------------------------');
// 14. Write a function that asks the user to enter a grade letter (A, B, C, D, or F) and 
//displays a message indicating whether the grade is passing (A, B, C) or failing (D, F). 
//Use a switch statement to handle the different cases.

function checkGradeStatus(grade) {
    switch (grade.toUpperCase()) {
        case 'A':
        case 'B':
        case 'C':
            console.log("Passing");
            break;
        case 'D':
        case 'F':
            console.log("Failing");
            break;
        default:
            console.log("Invalid grade entered.");
            break;
    }
}
checkGradeStatus('a');
checkGradeStatus('F');
console.log('------------------------');
// 15. Write a function that asks the user to enter their age, and then calculates and 
//displays their age in dog years (where one human year is equivalent to seven dog years). 
//If the user enters a negative number or zero, display an error message.

function calculateDogYears(age) {
    if (age <= 0) {
        console.log("Error: Please enter a valid positive age.");
    } else {
        let dogYears = age * 7;
        console.log("Your age in dog years is: " + dogYears);
    }
}

calculateDogYears(35);
calculateDogYears(0);