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

