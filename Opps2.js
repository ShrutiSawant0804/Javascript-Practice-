class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayInfo() {
        console.log(`Product Name: ${this.name}, Price: $${this.price}`);
    }
}