import express from "express"
import { fetch , create , update,fetchById,deleteUser } from "../controller/userController.js";



const route = express.Router();


route.post("/create",create);
route.get("/getAllUser",fetch);
route.get("/fetchById/:id",fetchById);
route.put("/update/:id",update);
route.delete("/delete/:id",deleteUser);


export default route;