// 1. Create a Person class with name, age, and gender properties, and a greet() method that logs a greeting message to the console.
// Then create a Student class that extends the Person class and adds a major property. Override the greet() method
// in the Student class to log a different greeting message to the console. 
//Create 2 variables, one of type Person and one of type Student and log them to console.


class Person {
    constructor (name, age, gender) {
        this._name= name;
        this._age= age;
        this._gender = gender;

    }
    greet () {
    return 'Welcome to my world...My name is ${this._name}';
}

}
const person1 = new Person('adam', 34, 'female');
console.log('Exercise 1: ');
console.log(person1.greet());

// 2. Create a Shape class with name and color properties, and a describe() method that logs a description of the shape 
//to the console (e.g. "This is a blue square"). Then create a Square class that extends the Shape class 
//and adds sideLength and area properties. Override the describe() method in the Square class to log a description of the square 
//to the console (e.g. "This is a blue square with a side length of 5 and an area of 25").

 class Shape {
    constructor (name, color) {
        this._name = name;
        this._color = color;
    }
    describe () {
        return 'This is a ${this._color} ${this._name}';
    }

    
 }

 class Square extends Shape {
    constructor(name, color, sideLength){
        super(name, color);
        this._sideLength = sideLength;
        this._area = sideLength * sideLength;

    }
    express (){
        return 'This is a ${this._color} ${this._name} with a side length of ${this._sideLength} and area of ${this._area}';
    }
}

const shape1 = new Shape('circle', 'red');
const shape2 = new Square('square', 'white', 12, 144);
console.log('Exercise 2: ');
console.log(shape1.describe());
console.log(shape2.express());
console.log('-------------');

// 3. Create a Vehicle class with make, model, and year properties, and a start() method that logs a message
// to the console indicating that the vehicle has started. Then create a Car class that extends the Vehicle class 
//and adds a numWheels property. Override the start() method in the Car class to log a different message to the console 
//indicating that the car has started.
class Vehicle {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start () {
        return ' ${this.make} ${this.model} has started';
    }

    
 }

 class Car extends Vehicle {
    constructor(make, model, year, numWheels){
        super(make, model, year);
        this.numWheels = numWheels;

    }
    express (){
        return ' ${this.make} and ${this.model} made in ${this.year} and has ${this.numWheels}';
    }
}

const vehicle1 = new Vehicle('vw', 'golf', 2016);
const vehicle2 = new Car('volvo', 'wxc90', 2025, 4);


console.log('Exercise 3: ');
console.log(vehicle1.start());
console.log(vehicle2.express());
console.log('-------------');

console.log('-------------');

// 4. Create a BankAccount class with balance and interestRate properties, and deposit() and withdraw() methods. 
//Add a transactionHistory property that is an array of objects representing each transaction made on the account, 
//with properties for type (either "deposit" or "withdrawal"), amount, and date 
//({type: "withdrawal", amount: amount, date: new Date().toLocaleDateString()}). 
//Implement deposit() and withdraw() methods that add new transactions to the transactionHistory array. 
//Implement a get transactionHistory() getter method that returns a copy of the transaction history array, 
//and a get currentBalance() getter method that calculates and returns the current balance of the account 
//based on the transaction history.

//bu egzersiz cok zor geldi, sanirim bir cok uygulama bir arada oldugu icin. bununla ilgili dersten sonra biraz konusabilir miyiz ?

console.log('Exercise 4: ');


console.log('-------------');