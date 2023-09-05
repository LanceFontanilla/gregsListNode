import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";


class CarsService {

    async createCar(carData) {
        const car = await dbContext.Cars.create(carData)
        return car
    }

    async getCars() {
        const cars = await dbContext.Cars.find()
        return cars
    }

    async removeCar(carId) {

        const foundCar = await dbContext.Cars.findById(carId)
        if (!foundCar) {

            throw new BadRequest("No car at id:" + carId)
        }
        await foundCar.remove()

        return `Your car ${foundCar.make} has been removed` + carId
    }
}


export const carsService = new CarsService()