// 1. Create a Person class with name, age, and gender properties, and a greet() method that logs a greeting message to the console.
// Then create a Student class that extends the Person class and adds a major property. 
//Override the greet() method in the Student class to log a different greeting message to the console.
// Create 2 variables, one of type Person and one of type Student and log them to console.

class Person {
 constructor (name,age,gender){
    this._name = name;
    this._age = age;
    this._gender = gender;
} 
  greet(){
    console.log(`Hellooooo, i am ${this._name} and i am ${this._age}.`)
  }
}
const person1 = new Person ("Merve",34, "female");
person1.greet();

class Student extends Person {
    constructor(name,age,gender,major){
        super(name,age,gender)
        this._major = major;
    }
    greet(){
        console.log(`Helloo, i am a ${this._major}`);
    }
}
const student1 = new Student ("Merve", 34, "female","J. Developer");
student1.greet();

// 2. Create a Shape class with name and color properties, and a describe() method that logs a description
// of the shape to the console (e.g. "This is a blue square").
// Then create a Square class that extends the Shape class and adds sideLength and area properties.
// Override the describe() method in the Square class to log a description of the square to the console (e.g. "This is a blue square with a side length of 5 and an area of 25").

class Shape {
    constructor(name,color){
        this._name = name;
        this._color = color;
    }
    describe(){
        console.log(`This is ${this._color} ${this._name}.`);
    }
}
const myShape = new Shape ("shape", "black");
myShape.describe();

class Square extends Shape{
    constructor(name,color,sideLength){
        super(name,color);
        this._sideLength = sideLength;
        this.area = sideLength * sideLength;
    }
    describe(){
        console.log(`This is ${this._color} ${this._name} and area is ${this._area}`)
    }
}

const mySquare = new Square ("square", "pink", 10);
mySquare.describe();


// 3. Create a Vehicle class with make, model, and year properties, and a start() method 
//that logs a message to the console indicating that the vehicle has started. 
//Then create a Car class that extends the Vehicle class and adds a numWheels property. 
//Override the start() method in the Car class to log a different message to the console indicating that the car has started.

class Vehicle{
    constructor(make,model,year){
        this._make = make;
        this._model = model;
        this._year = year;
    }
    start(){
        console.log(`This is ${this._make} ${this._model} ${this._year}. `)
    }
}
const myVehicle = new Vehicle("Toyota", "Ranger", 2024);
myVehicle.start();

class Car extends Vehicle{
    constructor(make,model,year, numWheel){
        super(make,model,year);
        this._numWheel = numWheel;
    }
    start(){
        console.log(`${this._make} ${this._model} has ${this._numWheel} wheels`);
    }
}
const myCar = new Car ("Volvo", "XC90", 2025, 4);
myCar.start();

// 4. Create a BankAccount class with balance and interestRate properties, and deposit() and withdraw() methods. 
//Add a transactionHistory property that is an array of objects representing each transaction made on the account,
// with properties for type (either "deposit" or "withdrawal"), amount, and date ({type: "withdrawal",
// amount: amount, date: new Date().toLocaleDateString()}). 
//Implement deposit() and withdraw() methods that add new transactions to the transactionHistory array. 
//Implement a get transactionHistory() getter method that returns a copy of the transaction history array,
// and a get currentBalance() getter method that calculates and returns the current balance of the account based on the transaction history.

//I got a lot of help from cursor. I understood most of the steps. But I don't think I can rewrite the code on my own :))

class BankAccount {
    constructor(balance, interestRate) {
        this._balance = balance;
        this._interestRate = interestRate;
        this._transactionHistory = [];
    }

    deposit(amount) {
        this._balance += amount;
        this._transactionHistory.push({ type: "deposit", amount: amount, date: new Date().toLocaleDateString() });
    }

    withdraw(amount) {
        if (amount <= this._balance) {
            this._balance -= amount;
            this._transactionHistory.push({ type: "withdrawal", amount: amount, date: new Date().toLocaleDateString() });
        } else {
            console.log("Your balance is insufficient");
        }
    }

    get transactionHistory() {
        return this._transactionHistory;
    }

    get currentBalance() {
        let total = this._balance;
        for (let transaction of this._transactionHistory) {
            if (transaction.type === "deposit") {
                total += transaction.amount;
            } else {
                total -= transaction.amount;
            }
        }
        return total;
    }
}

const myAccount = new BankAccount(1000, 0.05);
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.withdraw(1200);
console.log(myAccount.transactionHistory);
console.log(myAccount.currentBalance);
