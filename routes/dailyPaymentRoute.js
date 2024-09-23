import express from "express";
import { createDailyPayment, fetch, fetchById, update ,deleteDailyPayment} from "../controller/dailyPaymentController.js";

const route = express.Router();

// route.post("/dailyPayments", create);
route.post("/create", createDailyPayment);  // Make sure this matches the frontend call

route.get("/getAllPayments", fetch);
route.get("/fetchById/:id", fetchById);
route.put("/update/:id", update);
route.delete("/delete/:id",deleteDailyPayment);

export default route;