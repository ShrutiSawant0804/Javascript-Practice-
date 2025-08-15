// Createa an object car with properties brand, model, and year. print each property

class Car {
    constructor(brand, model, year) { // Constructor to initialize properties
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    printDetails() {
        console.log(`Brand: ${this.brand}`); // Print brand
        console.log(`Model: ${this.model}`); // Print model
        console.log(`Year: ${this.year}`); // Print year
        console.log('-------------------');
    }
}

const car = new Car('Toyota', 'Corolla', 2020); // Create an instance of Car
car.printDetails();  // Print details of the car
const car2 = new Car('Honda', 'Civic', 2021);
car2.printDetails();


// Add a start method to car object that logs "Car is starting"

Car.prototype.start = function() { // Method to start the car
    console.log(`${this.brand} ${this.model} is starting.`);
}


car.start(); // Call the start method on car instance
car2.start(); // Call the start method on car2 instance


// Create an object person with Properties name and age. add a method greet() that prints "Hello, my name is ______".

class Person {
    constructor(name, age) { // Constructor to initialize properties
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}.`); // Method to greet
    }

}

const person = new Person('Alice', 30); // Create an instance of Person
person.greet(); // Call the greet method on person instance

// Write a function that takes an object and a property name as arguments and returns the value of that property.

function getPropertyValue(obj, propertyName) {
    return obj[propertyName]; // Return the value of the specified property
}
const product = {
    name: 'Laptop',
    price: 1000,
    category: 'Electronics'
};
const propertyName = 'price'; // Property to retrieve
const value = getPropertyValue(product, propertyName);  
console.log(`The value of the property "${propertyName}" is: ${value}`); // Print the value of the property

// Create a constructor function Animal that takes name and sound as parameters, and has a method makeSound() that logs the sound.

function Animal(name, sound) {
    this.name = name;   
    this.sound = sound;

    this.makeSound = function() { // Method to make sound
        console.log(`${this.name} says: ${this.sound}`);
        console.log('-------------------');
    }
}

const dog = new Animal('Dog', 'bhaoo'); // Create an instance of Animal
dog.makeSound(); // Call the makeSound method on dog instance

// Create a constructor function Book with properties title, author, and a method getDetails() that returns "Title by Author".

function Book(title, author) {
    this.title = title; // Property for book title
    this.author = author; // Property for book author
}

Book.prototype.getDetails = function() { // Method to get book details
    return `${this.title} by ${this.author}`; // Return formatted string
    
}

const book = new Book('1984', 'George Orwell'); // Create an instance of Book
console.log(book.getDetails()); // Call the getDetails method and print the result
console.log('-------------------');

// Using a constructor, create multiple Student objects with name and grade, and log their details.

function Student(name, grade) {
    this.name = name;
    this.grade = grade;
}

Student.prototype.getDetails = function() { // Method to get student details
    console.log(`Name: ${this.name}, Grade: ${this.grade}`);    
}

const student1 = new Student('John', 'A'); // Create an instance of Student
const student2 = new Student('Jane', 'B'); // Create another instance of Student
student1.getDetails();      
student2.getDetails(); // Call the getDetails method on both instances

// Create a Person class with a constructor that sets name and age. Add a method introduce() that prints "I am ___ years old".

class Person1 {
    constructor(name, age) { // Constructor to initialize properties
        this.name = name; // Property for person's name
        this.age = age; // Property for person's age
    }

    introduce() {
        console.log(`I am ${this.age} years old.`); // Method to introduce age
    }
}

const person1 = new Person1('Alice', 25); // Create an instance of Person
person1.introduce(); // Call the introduce method on person1 instance


// Product with discount 
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    getDiscount(discountPrecent){
        return this.price - (this.price * discountPrecent / 100);
    }
}

const prod = new Product("Laptop", 50000, "Electronics");
console.log(prod.getDiscount(10));

// Bank Account

class BankAccount {
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
        console.log(`Deposited: ₹${amount}. Total Balance: ₹${this.balance}`);
    }

    withdraw(amount){
        if(amount <= this.balance){
            this.balance -= amount;
            console.log(`Withdrawn: ₹${amount}. Total Balance: ₹${this.balance}`);
        } else {
            console.log("Insufficient funds!");
        }
    }
}

const acc = new BankAccount("Shruti", 10000);
acc.deposit(10000);
acc.withdraw(100);

// Book getSummary

class BookSummary {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    getSummary() {
        return `${this.title} by ${this.author}, ${this.pages} pages.`; // Return formatted summary
    }
}
const book1 = new BookSummary('The Great Gatsby', 'F. Scott Fitzgerald', 180); // Create an instance of BookSummar
console.log(book1.getSummary()); // Call the getSummary method and print the result
console.log('-------------------');