class Person{
    constructor(name, age) {
        this.name = name;   
        this.age = age;
    }

    introduce(){
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }

    static species(){
        return "Homo Sapiens"
    }
}

const person = new Person("Alice", 30);
console.log(person.introduce()); // Output: Hi, I'm Alice and I'm 30 years
console.log(Person.species()); 

class Student extends Person{
    constructor (name, age, grade){
        super (name, age); // call the parent constructor
        this.grade = grade;
    }

    introduce(){
        return `hi i am ${this.name}, i am ${this.age} years old and in grade ${this.grade}.`;
    }
}

const student = new Student ("Shruti", 25, "A");
console.log(student.introduce());



class Car{
    constructor(brand, model){
        this.brand = brand;
        this. model = model;
    }

    details(){
        return `the brand = ${this.brand} and model = ${this.model}`
    }
}

const car = new Car("Tata", "Tesla");
console.log(car.details());



