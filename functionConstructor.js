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