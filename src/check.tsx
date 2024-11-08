// Step 1: Define the Vehicle interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}

// Step 2: Implement the Car class that implements the Vehicle interface
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    // Constructor to initialize the properties
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Implement the start method
    start(): void {
        console.log("Car engine started");
    }
}

// Step 3: Create an instance of the Car class
const myCar = new Car("Toyota", "Corolla", 2020);

// Call the start method to verify the output
myCar.start();  // Expected output: "Car engine started"