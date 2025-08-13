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