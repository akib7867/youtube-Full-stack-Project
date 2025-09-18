
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    mobileNumber: {
        type: String,
        require: true
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum : ["user","owner","deliveryboy"],
         require: true
    }
}, { timeseries: true })

const User = mongoose.model("User",UserSchema)

export default User ;