// 3. Write a function that asks the user to enter two numbers and checks if the first number is greater than, less than, or equal to the second number using if else statement.

function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return `${num1} is greater than ${num2}`;
    } else if (num1 < num2) {
        return `${num1} is less than ${num2}`;
    } else {
        return `${num1} is equal to ${num2}`;
    }
}
console.log(compareNumbers(5, 3));
console.log(compareNumbers(5, 8));
console.log(compareNumbers(6, 6));

// 5. Write a function that takes in a number and checks if it's positive, negative, or zero using if else statement.
 function checkNumber (num){
if(num<0){
    return `${num} is negative`;
} else if(num=0){
    return `${num} is zero`;
} else{
    return `${num} is positive`;
}
 }
 console.log(checkNumber(5));
 console.log(checkNumber(-4));
 console.log(checkNumber(0));


// 6. Write a function that takes in a year and checks if it's a leap year (is divisible by 4 and not divisible by 100 OR divisible by 400) or not using if else statement.

 function leapYear (year){
    if(year %4==0 & year%100!==0) {
        return `${year} is leap year`;
    } else if(year%400==0){
        return `${year} is leap year`;
    } else {
        return `${year} is not a leap year`;
}
 }
 console.log(leapYear(2024));
 console.log(leapYear(2200));
 console.log(leapYear(2400));

// 7. Write a function that takes in a temperature and checks if it's above or below freezing using if else statement.

function checkFreezing(temperature){
    if(temperature<=0){
        return `${temperature} is below freezing`;
    } else {
        return `${temperature} is above freezing`;
    }
}

// 8. Write a function that takes in a person's height and weight and checks if they are considered underweight, normal, overweight, or obese using if else statement.
// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness.
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity


function calculateBMI (weight,height){
    let checkHealty= weight/(height)**2;
    if (checkHealty<18.5){
        return `${checkHealty} is Underweight`;
    } else if (checkHealty>=18.5 && checkHealty<=24.9){
        return `${checkHealty} is Healthy Weight`;
    } else if (checkHealty>=25.0 && checkHealty<=29.9) {
        return `${checkHealty} is Overweight`;
    } else{
        return `${checkHealty} is Obesity`;
    }
}
console.log(calculateBMI(65,1.70));
console.log(calculateBMI(85,1.70));
console.log(calculateBMI(40,1.70));

// 9. Write a function that takes in a person's age and checks if they are a child (age 0-12), 
//teenager (age 13-19), adult (age 20-64), or senior citizen (age 65 and above) using if else statement.

function checkAge (age){
    if(age>0 && age<=12){
        return "Child";
    } else if(age>12 && age<=19){
        return "Teenager";
    } else if(age>19 && age<=64){
        return "Adult";
    } else if(age>64){
        return "Senior citizen";
    }else{
        return "Please enter a valid age";
    }
}
console.log(checkAge(5));
console.log(checkAge(25));
console.log(checkAge(66));
console.log(checkAge(-10));

// 10. Write a function that takes age as a number and whether they are a student (yes or no). 
//If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote". 
//If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote".
// If the age is greater than 65, print "You are a senior citizen". 
//If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote".

function checkVotingStatus(isStudent,age){
    if(isStudent==='yes' && age<18){
        return "You are a student and not old enough to vote";
    } else if(isStudent==='no' && (age>=18 && age<65)){
        return  "You are eligible to vote";
    } else if(age>65){
        return "You are a senior citizen";
    } else if(isStudent==='yes' && age>18){
        return "You are old enough to vote";
    }
}
console.log(checkVotingStatus('yes',10));
console.log(checkVotingStatus('no',35));
console.log(checkVotingStatus('yes',70));
console.log(checkVotingStatus('yes',20));

// 11. Write a function that asks the user to enter their salary and their years of experience. 
//If the salary is less than $30,000 and the years of experience are less than 5, print "Sorry, we cannot offer you the job at this time". 
//If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), print "We can offer you the job at a lower salary". 
//If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, print "We can offer you the job at the requested salary".

function checkJobOffer(salary, experience){
    if(salary<30000 && experience<=5){
        return "Sorry, we cannot offer you the job at this time";
    } else if(salary<50000 && (experience>5 && experience<=10)){
        return "We can offer you the job at a lower salary";
    } else if(salary>50000 && experience>10){
        return "We can offer you the job at the requested salary";
    }
}
console.log(checkJobOffer(10000,4));
console.log(checkJobOffer(10000,8));
console.log(checkJobOffer(60000,12));

// 12. Write a function that asks the user to enter their score on a test. 
//If the score is less than 60, print "You failed the test". 
//If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". 
//If the score is between 71 and 80 (inclusive), print "You got a B". 
//If the score is between 81 and 90 (inclusive), print "You got an A". If the score is greater than 90, print "You got an A+ - Great job!".

function testScore(score){
    if(score<60){
        return "You failed the test";
    } else if(score>=60 && score<=70){
        return "You passed the test, but your grade is not great";
    } else if(score>70 && score<=80){
        return "You got a B";
    } else if(score>80 && score<=90){
        return "You got an A";
    } else if(score>90 && score<=100){
        return "You got an A+ - Great job!";
    }
}
console.log(testScore(25));
console.log(testScore(75));
console.log(testScore(85));
console.log(testScore(95));

// 14. Write a function that asks the user to enter a grade letter (A, B, C, D, or F) 
//and displays a message indicating whether the grade is passing (A, B, C) or failing (D, F). Use a switch statement to handle the different cases.

function checkGrade(grade){
    switch(grade){
        case 'A':
        case 'B':
        case 'C':
            return "passing grade";
        case 'D':
        case 'F':
            return "failing grade"
    }
}
console.log(checkGrade('A'));
console.log(checkGrade('F'));

// 15. Write a function that asks the user to enter their age, and then calculates and displays their age in dog years 
//(where one human year is equivalent to seven dog years). If the user enters a negative number or zero, display an error message.

function calculateDogYear(yourAge){
    if(yourAge<0 || yourAge<=0){
        return "Error. Please enter a valid age";
    } else{
        return yourAge*7;
    }
}
console.log(calculateDogYear(8));
console.log(calculateDogYear(35));