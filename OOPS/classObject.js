class Product {
     
    name;
    price;
    category;
    description;
    rating;

    

    addToCart() {
        console.log(`${this.name} has been added to the cart.`);
    }

    removeFromCart() {
        console.log(`${this.name} has been removed from the cart.`);
    }

    displayProduct() {
        console.log(`Product Name`);
    }
    buyProduct() {
        console.log(`You have bought ${this.name}.`);
    }
}