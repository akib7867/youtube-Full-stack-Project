import jwt from "jsonwebtoken"

const genToken = async (UserID) => {
    try {
        const token = await jwt.genToken({ UserID }, process.env.JWT_SECRET, { expiresIn: "1y" })
        return token
    } catch (error) {
        console.log("error")
    }
}

export default genToken