import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    carNumber: {
        type: String,
        required: true
    },
    carName: {
        type: String,
        required: true
    },
    carCompany: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        required: true
    }
});

export default mongoose.model("cars", carSchema);