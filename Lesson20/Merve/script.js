// 1. Create a Person class with name, age, and gender properties, and a greet() method that logs a greeting message to the console.
// Then create a Student class that extends the Person class and adds a major property. Override the greet() method in the Student class to log a different greeting message to the console. Create 2 variables, one of type Person and one of type Student and log them to console.
class Person{
    constructor(name,age,gender){
        this._name = name;
        this._age = age;
        this._gender = gender;
    }
    greet(){
        return `Hello, my name is ${this._name}`;
    }
}

class Student extends Person{
    constructor(name,age,gender,major){
        super(name,age,gender);
        this._major = major;
    }
    greet(){
        return `Hello, my name is ${this._name} and I am ${this._age} years old  ${this._gender}. I study ${this._major}`;
    }
}
const person1 = new Person('Sam', 40, 'male');
const student1 = new Student('Emma', 38, 'female', 'computer science');

console.log(person1, person1.greet());
console.log(student1, student1.greet());
// 2. Create a Shape class with name and color properties, and a describe() method that logs a description of the shape to the console (e.g. "This is a blue square"). Then create a Square class that extends the Shape class and adds sideLength and area properties. Override the describe() method in the Square class to log a description of the square to the console (e.g. "This is a blue square with a side length of 5 and an area of 25").
class Shape{
    constructor(name, color){
        this._name = name;
        this._color = color;
    }
    describe(){
        return `This is a ${this._name} ${this._color}`;
    }
}

class Square extends Shape{
    constructor(name, color, sideLength){
        super(name, color);
        this._sideLength = sideLength;
        this._area = sideLength * sideLength;
    }
    describe(){
        return `This is a ${this._name} ${this._color} with a side length of ${this._sideLength} and an area of ${this._area}`;
    }
}

const shape = new Shape('purple', 'rectangular');
const square = new Square('yellow', 'square', 6);

console.log(shape, shape.describe());
console.log(square, square.describe());

// 3. Create a Vehicle class with make, model, and year properties, and a start() method that logs a message to the console indicating that the vehicle has started. Then create a Car class that extends the Vehicle class and adds a numWheels property. Override the start() method in the Car class to log a different message to the console indicating that the car has started.
class Vehicle {
    constructor(make,model,year,numWheels){
        this._make = make;
        this._model = model;
        this._year = year;
        this._numWheels = numWheels
    }
    start(){
        return `${this._make} ${this._model} vehicle made in ${this._year} has started.` ;
    }
}
class Car extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this._numWheels = 4;
    }
    start(){
        return `${this._numWheels} wheels of ${this._make} ${this._model} is better in ${this._year}.` ;
    }
}
const vehicle = new Vehicle('Honda', 'Jazz', '2002', 4);
const car = new Car('Ford', 'Ranger', '2022');

console.log(vehicle, vehicle.start());
console.log(car, car.start());

// 4. Create a BankAccount class with balance and interestRate properties, and deposit() and withdraw() methods. Add a transactionHistory property that is an array of objects representing each transaction made on the account, with properties for type (either "deposit" or "withdrawal"), amount, and date ({type: "withdrawal", amount: amount, date: new Date().toLocaleDateString()}). Implement deposit() and withdraw() methods that add new transactions to the transactionHistory array. Implement a get transactionHistory() getter method that returns a copy of the transaction history array, and a get currentBalance() getter method that calculates and returns the current balance of the account based on the transaction history.

class BankAccount {
    constructor(balance, interestRate) {
        this._balance = balance;
        this._interestRate = interestRate;
        this._transactionHistory = [];
    }

    deposit(amount) {
        this._balance += amount;
        this._transactionHistory.push({
            type: "deposit",
            amount: amount,
            date: new Date().toLocaleDateString()
        });
    }

    withdraw(amount) {
        if (amount > this._balance) {
            console.log("Insufficient funds");
            return;
        }
        this._balance -= amount;
        this._transactionHistory.push({
            type: "withdrawal",
            amount: amount,
            date: new Date().toLocaleDateString()
        });
    }

    get transactionHistory() {
        return [...this._transactionHistory];
    }

    get currentBalance() {
        return this._balance;
    }
}

const account = new BankAccount(1000, 0.05);
account.deposit(500);
account.withdraw(200);
console.log(account.transactionHistory);
console.log("Current Balance:", account.currentBalance);