// 3. Write a function that asks the user to enter two numbers and checks if the first number is greater than, less than, or equal to the second number using if else statement.
function comparethem(firstnumber,secondnumber){
  if(firstnumber>secondnumber){
    console.log('The first number is bigger then the second number');
  }
  else if(firstnumber<secondnumber){
    console.log('The first number is less than the second number')
  }
  else{
    console.log('Numbers are equal')
  }
}
comparethem(39,90);
comparethem(3,1);

// 5. Write a function that takes in a number and checks if it's positive, negative, or zero using if else statement.
function numbertype(number){
    if(number>0){
        console.log('The number is positive');
    }
    else if(number<0){
        console.log('The number is negative');
    }
    else{
        console.log('The number is zero');
    }
}
numbertype(0);
numbertype(80);

// 6. Write a function that takes in a year and checks if it's a leap year (is divisible by 4 and not divisible by 100 OR divisible by 400) or not using if else statement.
function yeartype(year){
    if(year%4===0 || year%400===0){
        console.log('It\'s a leap year');
    }
    else{
        console.log('It\'s not a leap year');
    }
}
yeartype(2020);
yeartype(2003);
// 7. Write a function that takes in a temperature and checks if it's above or below freezing using if else statement.
function temperaturechecking(temp){
    if(temp>0){
        console.log('The temperature is above freezing');
    }
    else if(temp<0){
        console.log('The temparature is below the freezing');
    }
    else{
        console.log('the temperature is zero');
    }
}
temperaturechecking(-4);
temperaturechecking(4);
temperaturechecking(0);
// 8. Write a function that takes in a person's height and weight and checks if they are considered underweight, normal, overweight, or obese using if else statement.
// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness.
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity
function bmifinder(weight,height){

    let bmi=weight/(height**2)
    if(bmi<18.5){
        console.log('Underweight');
    }
    else if(bmi>=18.5 && bmi<=24.9){
        console.log('Healthy Weight');
    }
    else if(bmi>=25.0 && bmi<=29.9){
        console.log('OverWeight');
    }
    else{
        console.log('Obesity');
    }
}
bmifinder(58,1.63);
// 9. Write a function that takes in a person's age and checks if they are a child (age 0-12), teenager (age 13-19), adult (age 20-64), or senior citizen (age 65 and above) using if else statement.
function agegroup(age){
    if(age>=0 && age<=12){
        console.log('Child');
    }
    else if(age>=13 && age<=19){
        console.log('Teenager');
    }
    else if(age>=20 && age<=64){
        console.log('Adult');
    }
    else if(age>=65){
        console.log('senior citizen');
    }
}
agegroup(89);
agegroup(2);
agegroup(0);

// 10. Write a function that takes age as a number and whether they are a student (yes or no). If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote". If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen". If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote".
function voterage(age,student){
    if(age<18 && student==="yes"){
        console.log("You're a strudent and not old enough to vote");
    }
    else if(age>=18 && age<=65 && student==="no"){
        console.log("You're eligible to vote");
    }
    else if(age>65 && student===""){
        console.log("You're a senior citizen");
    }
    else if(age>=18 && student===""){
        console.log("You're old enough to vote")
    }
}
voterage(45,"");
voterage(45,"no");
// 11. Write a function that asks the user to enter their salary and their years of experience. If the salary is less than $30,000 and the years of experience are less than 5, print "Sorry, we cannot offer you the job at this time". If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), print "We can offer you the job at a lower salary". If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, print "We can offer you the job at the requested salary".
function joboffer(salary,years){
    if(salary<30000 && years<5){
        console.log("Sorry, We cannot offer you the job at this time");
    }
    else if(salary<50000 && years>=5 && years<=10){
        console.log("We can offer you the job at a lower salary");
    }
    else if(salary>50000 && years>10){
        console.log("We can offer you the job at the requested salary");
    }
    else{
        console.log("Sorry, We cannot offer you the job at this time");
    }
}
joboffer(20000,2);
joboffer(65000,2);
joboffer(65000,11);
joboffer(45000,5);
// 12. Write a function that asks the user to enter their score on a test. If the score is less than 60, print "You failed the test". If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". If the score is between 71 and 80 (inclusive), print "You got a B". If the score is between 81 and 90 (inclusive), print "You got an A". If the score is greater than 90, print "You got an A+ - Great job!".
function successcase(point){
    if(point<60){
        console.log("You failed the test");
    }
    else if(point>=60 && point<=70){
        console.log("You passed the test,but your grade is not great");
    }
    else if(point>70 && point<=80){
        console.log("You got B");
    }
    else if(point>80 && point<=90){
        console.log("You got an A");
    }
    else if(point>90){
        console.log("You got an A+ -Great job");
    }
}
successcase(81);
successcase(80);
successcase(98);
successcase(70);
successcase(71);

// 14. Write a function that asks the user to enter a grade letter (A, B, C, D, or F) and displays a message indicating whether the grade is passing (A, B, C) or failing (D, F). Use a switch statement to handle the different cases.
function gradeletter(letter){
    let message=" ";
    switch(letter){
        case 'A':
        case 'B':
        case 'C':
            message="You passed";
            break;
        case 'D':
        case 'E':
            message="You failed";
            break;
        default:
            message="invalid grade";
            break;
    }
    console.log(message);
}
gradeletter('F');
gradeletter('A');
gradeletter('a');
// 15. Write a function that asks the user to enter their age, and then calculates and displays their age in dog years (where one human year is equivalent to seven dog years). If the user enters a negative number or zero, display an error message.
function calculates(age){
    let dogyear=age*7;
            
    if(age<=0){
        console.log("error")
    }
    else if(age>0){
        console.log(dogyear);
    }
}
calculates(9);
calculates(0);
calculates(-5);