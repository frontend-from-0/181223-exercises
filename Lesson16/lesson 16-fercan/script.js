// 3. Write a function that asks the user to enter two numbers and 
//checks if the first number is greater than, less than, or equal to the second number using if else statement.

const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}


// 5. Write a function that takes in a number and checks if it's positive, negative, or zero using if else statement.

function isPositiveOrNegative (number) {
if(number<0){
    console.log('It\'s a negative number');
 } else if (number>0) {  
    console.log('It\'s a positive number');
 } else { 
    console.log ('It\'s equal to zero.');
}}


// 6. Write a function that takes in a year and checks if it's a leap year 
//(is divisible by 4 and not divisible by 100 OR divisible by 400) or not using if else statement.

function isLeapYear (year) {
    if(year%4==0 && year%100!=0){
        console.log('It\'s a leap year');
     } else (year%400==0); {  
        console.log('It\'s a leap year');
    }}

    isLeapYear (124);

// 7. Write a function that takes in a temperature and checks if it's above or below freezing 
//using if else statement.

function checkTemperature(temp) {
  const freezingPointCelsius = 0; // Freezing point in Celsius

  if (temp > freezingPointCelsius) {
    console.log("The temperature is above freezing.");
  } else if (temp < freezingPointCelsius) {
    console.log("The temperature is below freezing.");
  } else {
    console.log("The temperature is at the freezing point.");
  }
}

// Example usage:
checkTemperature(10);  // Output: The temperature is above freezing.
checkTemperature(-5);  // Output: The temperature is below freezing.
checkTemperature(0);   // Output: The temperature is at the freezing point.






// 8. Write a function that takes in a person's height and weight and 
//checks if they are considered underweight, normal, overweight, or obese using if else statement.
// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). 
//A high BMI can indicate high body fatness.
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity


function calculateBMI(height, weight) {
  return weight / (height*height);
}

function checkBodyMassIndex(height, weight)  {
  let BMI= calculateBMI(height, weight);

  if (BMI < 18.5) {
    console.log('Underweight');
  }
else if (BMI>=18.5 && BMI<= 24.9) {
  console.log('Healthy Weight');
}
else if (BMI>=25 && BMI<= 29.9) {
  console.log('Overweight');
}
else {
  console.log('Above Obesity');
}
} 

checkBodyMassIndex (1.65 , 58);


// 9. Write a function that takes in a person's age and checks if they are a child (age 0-12), 
//teenager (age 13-19), adult (age 20-64), or senior citizen (age 65 and above) using if else statement.

function getPersonsAge (num) {
  if (num>=0 && num<=12) {
    console.log('child');
  }
  else if (num>=13 && num<=19) {
    console.log('teenager');
  }
  else if (num>=20 && num<=64) {
    console.log('adult');
  }
  else if(num>=65){
    console.log('senior citizen');
  }
  else {
    console.log('invalid age');
  }
}

getPersonsAge(86);
getPersonsAge(12);

// 10. Write a function that takes age as a number and whether they are a student (yes or no). 
//If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote". 
//If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote". 
//If the age is greater than 65, print "You are a senior citizen". 
//If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote".

function getOnePersonsAgeAndStatus (num, status) {
  if (num<18 && status==='student') {
    console.log('You are a student and not old enough to vote');
  }
  else if (num>=18 && num<=65 && status!='student' ) {
    console.log('You are eligible to vote');
  }
  else if (num>65) {
    console.log('You are a senior citizen');
  }
  else (num>=18 && status==='student') 
    console.log('You are old enough to vote');
  }


getOnePersonsAgeAndStatus(36, 'student');
getOnePersonsAgeAndStatus(68);


// 11. Write a function that asks the user to enter their salary and their years of experience. 
//If the salary is less than $30,000 and the years of experience are less than 5, 
//print "Sorry, we cannot offer you the job at this time". 
//If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), 
//print "We can offer you the job at a lower salary". 
//If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, 
//print "We can offer you the job at the requested salary".

function getOnePersonsSalaryAndExperience (salary, years) {
  if (salary<30000 && years<5) {
    console.log('Sorry, we cannot offer you the job at this time');
  }
  else if (salary<50000 && years>=5 && years<=10) {
    console.log('We can offer you the job at a lower salary');
  }
  else  (salary>=50000 || years>=10) 
    console.log('We can offer you the job at the requested salary');
  

  }

  getOnePersonsSalaryAndExperience(42000, 6);



// 12. Write a function that asks the user to enter their score on a test. If the score is less than 60, 
//print "You failed the test". 
//If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". 
//If the score is between 71 and 80 (inclusive), print "You got a B". 
//If the score is between 81 and 90 (inclusive), print "You got an A". 
//If the score is greater than 90, print "You got an A+ - Great job!".

function testFailOrPass(number) {
    if (number<60) {
      console.log('you failed the test');
    } else if (number>=60 && number <= 70) {
        console.log('You passed the test, but your grade is not great');
    } else if ( number>=71 && number <= 80) {
        console.log('You got a B');
    } else if ( number>=81 && number <= 90) {
        console.log('You got an A');
    } else if( number >90){
        console.log('You got an A+ - Great job!');
    }
}

testFailOrPass(28);
testFailOrPass(86);

// 14. Write a function that asks the user to enter a grade letter (A, B, C, D, or F) and 
//displays a message indicating whether the grade is passing (A, B, C) or failing (D, F). 
//Use a switch statement to handle the different cases.


function checkGrade(grade) {
 
  // Use a switch statement to determine if the grade is passing or failing
  switch (grade) {
    case 'A':
    case 'B':
    case 'C':
      console.log(`${grade} is a passing grade.`);
      break;
    case 'D':
    case 'F':
      console.log(`${grade} is a failing grade.`);
      break;
    default:
      console.log(`Invalid grade entered: ${grade}`);
  }
}

// Example usage:
checkGrade('B'); // Output: B is a passing grade.
checkGrade('F'); // Output: F is a failing grade.
checkGrade('Z'); // Output: Invalid grade entered: Z



checkGrade();



// 15. Write a function that asks the user to enter their age, and then calculates and displays their age in dog years 
//(where one human year is equivalent to seven dog years). 
//If the user enters a negative number or zero, display an error message.

function calculateDogYears(age) {
  // Convert the input to a number
  age = Number(age);

  // Check if the input is a valid age
  if (age > 0) {
    let dogYears = age * 7;
    console.log(`Your age in dog years is: ${dogYears}`);
  } else {
    console.log("Error: Please enter a positive number greater than zero.");
  }
}

// Example usage:
calculateDogYears(30); // Replace 30 with the age you want to calculate in dog years


// Call the function
calculateDogYears(28);
