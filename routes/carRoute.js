import express from "express";
import { createCar, fetchCars, fetchCarById, updateCar,deleteCar} from "../controller/carController.js";

const route = express.Router();

route.post("/create", createCar);
route.get("/getAllCars", fetchCars);
route.get("/fetchById/:id", fetchCarById);
route.put("/update/:id", updateCar);
route.delete("/delete/:id",deleteCar);

export default route;