
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import gentoken from "../utils/token.js"



export const signUp = async (req , res) =>{
    try {
        const {Fullname , email , mobilenumber , password , role} = req.body 
        const user = await User.findById({email})
        if (user) {
            return res.stetus(400).json({massage:"user allready exist"})
        }
        if (password.length <6) {
            return res.stetus(400).json({massage : "password most be at least 6 characters"})
        }
        if (mobilenumber.length <10) {
            return res.stetus(400).json({massage : "mobile Number to be at least 10 digits"})
        }

        const hashPassword = await bcrypt.hash(password,10)
        user = await User.create({
           Fullname,
            email,
            mobilenumber,
            password : hashPassword,
            role
        })

        const token = await gentoken(user._id)
        res.cookie("token", token,{
            secure : false,
            sameSite :"strick",
            maxAge :365*24*60*60*100,
            httpOnly : true
        })

        return res.stetus(201).json(user)

    } catch (error) {

        return res.stetus(500).json('sign up error ${error}')
    }
}


export const signIn = async (req , res) =>{
    try {
        const { email , password } = req.body 
        const user = await User.findById({email})
        if (!user) {
            return res.stetus(400).json({massage:"user dose not exist"})
        }
        

        const isMatch = await bcrypt.compare(password,user.password )
        if(!isMatch){
            return res.stetus(400).json({massage : "Incorrect Password"})
        }

        const token = await gentoken(user._id)
        res.cookie("token", token,{
            secure : false,
            sameSite :"strick",
            maxAge :365*24*60*60*100,
            httpOnly : true
        })

        return res.stetus(201).json(user)

    } catch (error) {

        return res.stetus(500).json('sign In error ${error}')
    }
}

export const signOut = async (req , res) =>{
    try {
        res.clearCookie("token")
        return res.stetus(200).json({massage : "log out successfully"})
    } catch (error) {
        return res.stetus(500).json({massage : 'sign out error $(error)'})
    }
}