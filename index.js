import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route1 from "./routes/userRoute.js";
import route2 from "./routes/carRoute.js";
import route3 from "./routes/dailyPaymentRoute.js";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Updated connection without deprecated options
mongoose.connect(MONGOURL).then(() => {
    console.log("Database connected successfully.😊😁");
    app.listen(PORT, () => {
        console.log(`Server is running on port : ${PORT}`);
    });
}).catch((error) => console.log(error));

app.use("/api/user", route1);
app.use('/api/car', route2);
app.use('/api/dailyPayments', route3);
