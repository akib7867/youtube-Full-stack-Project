
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    email: {
        type: string,
        require: true
    },
    mobileNumber: {
        type: string,
        require: true
    },
    password: {
        type: string,
    },
    role: {
        type: string,
        enum : ["user","owner","delivryboy"],
         require: true
    }
}, { timeseries: true })

const User = mongoose.model("User",UserSchema)

export default User