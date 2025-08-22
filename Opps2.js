class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayInfo() {
        console.log(`Product Name: ${this.name}, Price: $${this.price}`);
    }

    getPrice() {
        return this.price;
    }

    setPrice(newPrice) {
        if (newPrice > 0) {
            this.price = newPrice;
        } else {
            console.log("Price cannot be negative.");
        }
    }
}

const product1 = new Product("Laptop", 1200);
product1.displayInfo(); // Product Name: Laptop, Price: $1200
console.log(product1.getPrice()); // 1200
product1.setPrice(10000);
console.log(product1.getPrice()); // 10000
