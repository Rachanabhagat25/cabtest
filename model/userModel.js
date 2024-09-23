import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: true
    },
    mobile1: {
        type: String,
        required: true
    },
    mobile2: {
        type: String,
        required: false
    },
    isDelete: {
        type: Boolean,
        default: false
    },
    isEdit: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model("users", userSchema);