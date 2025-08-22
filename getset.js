class Person {
    constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    }

    getfullName() { // we can get both names together, it is taking values from constructor and after that when setter method is called it will update the values
        return `${this.firstname} ${this.lastname}`;
    }

    setfullName(newFirstName, newLastName) { // we can set both names together
        this.firstname = newFirstName;
        this.lastname = newLastName;
    }
}
const person1 = new Person("John", "Doe");
console.log(person1.getfullName()); // John Doe
person1.setfullName("Jane", "Smith");
console.log(person1.getfullName()); // Jane Smith




class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}
const rect1 = new Rectangle(10, 5);
console.log(rect1.getArea()); // 50





class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    getFahrenheit() {
        return (this.celsius * 9/5) + 32;
    }

    setFahrenheit(fahrenheit) {
        this.celsius = (fahrenheit - 32) * 5/9;
    }
}
const temp1 = new Temperature(0);
console.log(temp1.getFahrenheit()); // 32
temp1.setFahrenheit(100);
console.log(temp1.celsius); // 37.77777777777778



class Employee {

    #salary;

    constructor(name,salary) {
        this.name = name;
        this.#salary = salary;
    }

    getSalary() {
        return this.#salary;
    }

    setSalary(newSalary) {
        if (newSalary >= 0) {
            this.#salary = newSalary;
        } else {
            console.log("Salary cannot be negative.");
        }
    }
}

const emp1 = new Employee("Alice", 50000);
console.log(emp1.getSalary()); // 50000
emp1.setSalary(60000);
console.log(emp1.getSalary()); // 60000





const Student = {
    marks: 400,

     getPercentage() {
        return (this.marks / 500) * 100; // Assuming total marks are 500
    },

    setPercentage(newMarks) {
        if (newMarks >= 0 && newMarks <= 500) {
            this.marks = newMarks;
        } else {
            console.log("Marks should be between 0 and 500.");
        }   
    }
};
const student1 = Object.create(Student);
console.log(student1.getPercentage()); // 80
student1.setPercentage(450);
console.log(student1.getPercentage()); // 90
