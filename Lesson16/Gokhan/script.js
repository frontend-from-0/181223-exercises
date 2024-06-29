// 3. Write a function that asks the user to enter two numbers and checks if the first age is 
//         greater than, less than, or equal to the second age using if else statement.

function checkNumber(num1, num2) {

    if (num1 > num2) {
        console.log("First Number is greater than to the second age.");
    } else if (num1 < num2) {
        console.log("First Number is less than to the second age.");
    } else { console.log("First Number is equal to the second age.") }

}

checkNumber(11, 1);
checkNumber(5, 35);



// 5. Write a function that takes in a age and checks if it's positive, negative, or zero using if else statement.

function numberChecks(age) {

    if (age > 0) {
        console.log("Number is POSITIVE.");
    } else if (age < 0) {
        console.log("Number is NEGATIVE.");
    } else { console.log("Number is ZERO.") }

}

numberChecks(5);
numberChecks(-7);


// 6. Write a function that takes in a year and checks 
//   if it's a leap year (is divisible by 4 and not divisible by 100 OR divisible by 400) or not using if else statement.

function checkLeapYear(year) {

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(year + " is a leap year.");
    } else { console.log(year + " is not a leap year.") }

}
// I didn't do this myself (with AI)
checkLeapYear(2020);
checkLeapYear(1900);
checkLeapYear(2000);

// 7. Write a function that takes in a temperature and checks if it's above or below freezing using if else statement.

function temperatureChecks(freezing) {

    if (freezing > 0) {
        console.log("The temperature is above the freezing.");
    } else if (freezing < 0) {
        console.log("The temperature is below the freezing.");
    }

}

temperatureChecks(27);
temperatureChecks(-15);

// 8. Write a function that takes in a person's height and weight and checks 
//    if they are considered underweight, normal, overweight, or obese using if else statement.
//    Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). 
//    A high BMI can indicate high body fatness.
//    Formula: weight (kg) / [height (m)]2
//    Below 18.5	Underweight
//    18.5 – 24.9	Healthy Weight
//    25.0 – 29.9	Overweight
//    30.0 and Above	Obesity

function checkBMI(weight, height) {

    let bmi = weight / (height * height);

    if (bmi < 18.5) {
        console.log("Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("Healthy Weight");
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        console.log("Overweight");
    } else { console.log("Above Obesity") }

}

checkBMI(15, 1.6);
checkBMI(21, 1.5);
checkBMI(28, 1.8);
checkBMI(36, 1.2);

// 9. Write a function that takes in a person's age and checks 
//     if they are a child (age 0-12), teenager (age 13-19), adult (age 20-64), 
//     or senior citizen (age 65 and above) using if else statement.

function personAge(age) {

    if (age >= 0 && age <= 12) {
        console.log("You are child.");
    } else if (age >= 13 && age <= 19) {
        console.log("You are teenager.");
    } else if (age >= 20 && age <= 64) {
        console.log("You are adult.");
    } else if (age >= 65) {
        console.log("You are senior citizen.");
    }

}

personAge(7);
personAge(15);
personAge(41);
personAge(77);


// 10. Write a function that takes age as a age and whether they are a student (yes or no). 
//     If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote". 
//     If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote". 
//     If the age is greater than 65, print "You are a senior citizen". 
//     If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote".

function checkVotingEligibility(age, isStudent) {

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

checkVotingEligibility(16, true);
checkVotingEligibility(40, "no");
checkVotingEligibility(65, "no");
checkVotingEligibility(22, "yes");

// 11. Write a function that asks the user to enter their salary and their years of experience. 
//     If the salary is less than $30,000 and the years of experience are less than 5, 
//     print "Sorry, we cannot offer you the job at this time". 
//     If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), 
//     print "We can offer you the job at a lower salary". 
//     If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, 
//     print "We can offer you the job at the requested salary".

function salaryAndExperience(salary, experience) {

    if (salary < 30000 && experience < 5) {
        console.log("Sorry, we cannot offer you the job at this time")
    } else if (salary < 50000 && experience >= 5 && experience <= 10) {
        console.log("We can offer you the job at a lower salary")
    } else if (salary >= 50000 && experience >= 10) {
        console.log("We can offer you the job at the requested salary")
    }

}

salaryAndExperience(28000, 3);
salaryAndExperience(43000, 7);
salaryAndExperience(63000, 12);


// 12. Write a function that asks the user to enter their score on a test. 
//     If the score is less than 60, print "You failed the test". 
//     If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". 
//     If the score is between 71 and 80 (inclusive), print "You got a B". 
//     If the score is between 81 and 90 (inclusive), print "You got an A". 
//     If the score is greater than 90, print "You got an A+ - Great job!".

function scoreTest(score) {

    if (score < 60) {
        console.log("You failed the test.")
    } else if (score >= 60 && score <= 70) {
        console.log("You passed the test, but your grade is not great.")
    } else if (score >= 71 && score <= 80) {
        console.log("You got a B.")
    } else if (score >= 81 && score <= 90) {
        console.log("You got a A.")
    } else if (score >= 91) {
        console.log("You got an A+ - Great job!")
    }

}

scoreTest(43);
scoreTest(68);



// 14. Write a function that asks the user to enter a grade letter (A, B, C, D, or F) and 
//     displays a message indicating whether the grade is passing (A, B, C) or failing (D, F). 
//     Use a switch statement to handle the different cases.

function gradeLetter(grade) {

    switch (grade) {
        case "A":
        case "B":
        case "C":
            console.log("Grade is passing.");
            break;
        case "D":
        case "F":
            console.log("Grade is failing");
            break;
    }

}

gradeLetter("B");
gradeLetter("F");


// 15. Write a function that asks the user to enter their age, 
//     and then calculates and displays their age in dog years (where one human year is equivalent to seven dog years). 
//     If the user enters a negative age or zero, display an error message.

function calculateDogYears(humanAge) {

    if (humanAge > 0) {
        let dogAge = 7 * humanAge;
        console.log("You are " + dogAge + " years old in dog years.");
    } else { console.log("Error: Please enter a number greater than zero.") }

}

calculateDogYears(12);
calculateDogYears(-1);