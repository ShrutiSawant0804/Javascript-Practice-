class Product{
    #price;
    #name;
    #description;

    constructor(builder){
        this.#price = builder.price;
        this.#name = builder.name;
        this.#description = builder.description;
    }
}