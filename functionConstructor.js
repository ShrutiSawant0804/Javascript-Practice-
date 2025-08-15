function Animal(name, sound){
    this.name = name;
    this.sound = sound;

    this.makeSound = function() { // Method to make sound
        console.log(`${this.name} says: ${this.sound}`);
        console.log('-------------------');
    };
}

const dog = new Animal('Dog', 'bhaoo'); // Create an instance of Animal
dog.makeSound(); // Call the makeSound method on dog instance



function circle(radius) {
    this.radius = radius;

    this.area = function(){
        return Math.PI * this.radius * this.radius; // Calculate area of the circle
    }

    this.circumference = function() {
        return 2 * Math.PI * this.radius; // Calculate circumference of the circle
    }
}
const myCircle = new circle(10); // Create an instance of circle
console.log(`Area of the circle: ${myCircle.area()}`);  
console.log(`Circumference of the circle: ${myCircle.circumference()}`); // Print circumference of the circle
console.log('-------------------');



function Bike(brand, model) {
    this.brand = brand;
    this.model = model; 
}

const bike1 = new Bike('Yamaha', 'FZ'); // Create an instance of Bike
const bike2 = new Bike('Honda', 'CBR'); // Create another instance of Bike
console.log(`Bike 1: ${bike1.brand} ${bike1.model}`); // Print details of bike1
console.log(`Bike 2: ${bike2.brand} ${bike2.model}`);



function Person(name, weight, height) {
    this.name = name;
    this.weight = weight;
    this.height = height;   

    this.calculateBMI = function() { // Method to calculate BMI
        return `BMI of ${this.name} is ${(this.weight / (this.height * this.height)).toFixed(2)}`;
    };
}
const person1 = new Person('John', 70, 1.75); // Create an instance of Person
console.log(person1.calculateBMI());



function Flight(destination, price, duration) {
    this.destination = destination;
    this.price = price;
    this.duration = duration;

    this.flightBook = function() {
        return `Flight to ${this.destination} costs $${this.price} and takes ${this.duration} hours.`;
    }
}
const flight1 = new Flight('New York', 300, 5); // Create an instance of Flight
console.log(flight1.flightBook());