class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

displayDetails() {
    console.log("Product Name: " + this.name);
    console.log("Product Price: $" + this.price);
    console.log("Product Category: " + this.category);
}
}
let iphone = new Product('iPhone 14', 999); // Create an instance of Product

iphone.name = 'iPhone 14 Pro'; // Update the name of the product
iphone.price = 1099; // Update the price of the product
iphone.category = 'Smartphone'; // Add a new property to the product

console.log("Updated Product Details:");
iphone.displayDetails(); // Display updated product details




