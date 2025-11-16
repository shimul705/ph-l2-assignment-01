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

// console.log(pizza.getMyData());





// === Encapsulation ===

class Car {
    brand: string;
    speed: number;

    // Constructor
    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;

    }

    // Method 
    drive() {
        return `This is ${this.brand} & it's speed is ${this.speed} Km/h`
    }


}
// instans
const audi = new Car("Audi", 240)
const toyota = new Car("toyota", 100)

console.log(audi.drive());
console.log(toyota.drive());


// 4 Piller
// Encapsulation
// Inheritense
// abstract
// Polymorphisom