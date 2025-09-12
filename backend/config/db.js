import mongoose from "mongoose"

const connectDb = async () =>{
    try {
        await mongoose. connectDb(process.env.MONGODB_URL)
        console.log("Db conected")
    } catch (error) {
        console.log("Db erroe")
    }
}

export default connectDb