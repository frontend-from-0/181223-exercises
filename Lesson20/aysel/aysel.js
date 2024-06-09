// 1. Create a Person class with name, age, and gender properties, and a greet() method that logs a greeting message to the console.
class Person {
    constructor(name, age , gender) {
      this.name = name;
      this.age = age;
      this.gender=gender;

    }
    greet() {
      console.log(`Hello I'm  ${this.name} and ${this.age} years old.`);
    }
  }
  
  const person1 = new Person('Ali', 30, 'male');
  person1.greet(); 
// Then create a Student class that extends the Person class and adds a major property. Override the greet() method in the Student class to log a different greeting message to the console. Create 2 variables, one of type Person and one of type Student and log them to console.
class Student extends Person {
    constructor(name, age, gender, major) {
      super(name, age, gender); 
      this.major = major; 
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old, and my major is ${this.major}.`);
    }
  }
  
  const student1 = new Student('Mehmet', 35, 'male', 'literature');
  student1.greet();
  
// 2. Create a Shape class with name and color properties, and a describe() method that logs a description of the shape to the console (e.g. "This is a blue square"). Then create a Square class that extends the Shape class and adds sideLength and area properties. Override the describe() method in the Square class to log a description of the square to the console (e.g. "This is a blue square with a side length of 5 and an area of 25").

class Shape {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
  
    describe() {
      console.log(`This is a ${this.color} ${this.name}.`);
    }
  }
  
  const shape1 = new Shape('triangle', 'red');
  shape1.describe();
  
 
  class Square extends Shape {
    constructor(color, sideLength) {
      super('square', color); 
      this.sideLength = sideLength; 
    }
  
    get area() {
      return this.sideLength * this.sideLength;
    }
  
    describe() {
      console.log(`This is a square with a color of ${this.color}, a side length of ${this.sideLength}, and an area of ${this.area}.`);
    }
  }
  
  const square1 = new Square('blue', 5);
  square1.describe(); 
  
  
// 3. Create a Vehicle class with make, model, and year properties, and a start() method that logs a message to the console indicating that the vehicle has started. Then create a Car class that extends the Vehicle class and adds a numWheels property. Override the start() method in the Car class to log a different message to the console indicating that the car has started.
class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start() {
      console.log("The vehicle has started.");
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, year, numWheels) {
      super(make, model, year);
      this.numWheels = numWheels;
    }
  
    start() {
      console.log(`${this.make} ${this.model} has started in ${this.year} with ${this.numWheels} wheels.`);
    }
  }
  
  const car1 = new Car("Tesla", "Model S", 2023, 4);
  car1.start(); 
  

// 4. Create a BankAccount class with balance and interestRate properties, and deposit() and withdraw() methods. Add a transactionHistory property that is an array of objects representing each transaction made on the account, with properties for type (either "deposit" or "withdrawal"), amount, and date ({type: "withdrawal", amount: amount, date: new Date().toLocaleDateString()}). Implement deposit() and withdraw() methods that add new transactions to the transactionHistory array. Implement a get transactionHistory() getter method that returns a copy of the transaction history array, and a get currentBalance() getter method that calculates and returns the current balance of the account based on the transaction history.
class BankAccount {
    constructor(balance, interestRate) {
      this.balance = balance;
      this.interestRate = interestRate;
      this.transactionHistory = []; 
    }
  
    
    deposit(amount) {
      this.balance += amount; 
    
      this.transactionHistory.push({
        type: "deposit",
        amount: amount,
        date: new Date().toLocaleDateString()
      });
    }
  
   
    withdraw(amount) {
      if (amount <= this.balance) { 
        this.balance -= amount; 
       
        this.transactionHistory.push({
          type: "withdrawal",
          amount: amount,
          date: new Date().toLocaleDateString()
        });
      } else {
        console.log("Insufficient funds!"); 
      }
    }
  
    
    getTransactionHistory() {
      return [...this.transactionHistory];
    }
  
    
    getCurrentBalance() {
      
      const totalAmount = this.transactionHistory.reduce((total, transaction) => {
        if (transaction.type === "deposit") {
          return total + transaction.amount;
        } else {
          return total - transaction.amount;
        }
      }, 0);
      return totalAmount;
    }
  }
  


  