export default class Wishlist {
    constructor() {
        this.cars = [];
    }

    add(car) {
        this.cars.push(car);
    }

    remove(car) {
        this.cars = this.cars.filter((existingCar) => existingCar != car)
    }
}