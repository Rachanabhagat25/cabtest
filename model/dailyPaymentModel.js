import mongoose from "mongoose";

const dailyPaymentsSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    carAssign: {
        type: String,
        required: true
    },
    totalEarning: {
        type: Number,
        required: true
    },
    cashCollected: {
        type: Number,
        required: true
    },
    totalcash: {
        type: Number,
        required: true
    },
    CNG: {
        type: Number,
        required: true
    },
    tollTax: {
        type: Number,
    },
    payment: {
        type: Number,
        required: true
    },
    benefit: {
        type: Number,
        required: true
    },
    trips: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    percentage: {
        type: String,
        required: true
    },
    isDelete: {
        type: Boolean,
        default: false
    },
    isEdit: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model("dailyPayments", dailyPaymentsSchema);