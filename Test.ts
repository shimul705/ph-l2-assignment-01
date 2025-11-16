class Pizza {
    topping: string;
    size: number;


    constructor(topping: string, size: number) {
        this.topping = topping;
        this.size = size;
    }

    getMyData() {
        return `Serving a ${this.size} Inch pizza!, With ${this.topping}`
    }
}

const pizza = new Pizza("Chicken", 20)

console.log(pizza.getMyData());
