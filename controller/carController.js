import Car from "../model/carModel.js";

// Create a new car
export const createCar = async (req, res) => {
    try {
        const carData = new Car(req.body);
        const { carNumber } = carData;

        const carExist = await Car.findOne({ carNumber });
        if (carExist) {
            return res.status(400).json({ message: "Car already exists." });
        }
        const savedCar = await carData.save();
        res.status(200).json({ car: savedCar, message: "Car Created Successfully." });
    } catch (error) {
        res.status(500).json({ error: "Internal server error." });
    }
};

// Fetch all cars
export const fetchCars = async (req, res) => {
    try {
        const cars = await Car.find();
        if (cars.length === 0) {
            return res.status(404).json({ message: "Cars Not Found." });
        }
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ error: "Internal server error." });
    }
};

// Fetch car by ID
export const fetchCarById = async (req, res) => {
    try {
        const id = req.params.id;
        const car = await Car.findById(id);
        if (!car) {
            return res.status(404).json({ message: "Car not found." });
        }
        res.status(200).json(car);
    } catch (error) {
        console.error("Fetch Car by ID Error:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};

// Update car by ID
export const updateCar = async (req, res) => {
    try {
        const id = req.params.id;
        const carExist = await Car.findOne({ _id: id });
        if (!carExist) {
            return res.status(404).json({ message: "Car not found" });
        }
        const updateCar = await Car.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).json({ car: updateCar, message: "Car Updated Successfully." });
    } catch (error) {
        res.status(500).json({ error: "Internal server error." });
    }
};

export const deleteCar = async (req, res)=>{
    try {
        const id = req.params.id;
        const carExist = await Car.findOne({ _id: id });
        if (!carExist) {
            return res.status(404).json({ message: "Car not found" });
        }
        await Car.findByIdAndDelete(id);
        res.status(201).json({message : " Car deleted Successfully."});
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "});
    }    
    
}
