import { Product } from "../models/product.model.js";
import { User } from "../models/user.model.js";
import json from 'jsonwebtoken';

export const Register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.json({
                status: 400,
                message: "Please Fill the all Fields"
            })
        }

        const exist = await User.findOne({ email: email })

        if (exist) {
            return res.json({
                status: 400,
                message: "User Already Exists"
            })
        }

        const user = await User.create({
            username, email, password
        })

        return res.json({
            status: 200,
            message: "User Register Successfully",
            data: user
        })

    } catch (error) {
        console.log(error)
        return res.json({
            status: 500,
            message: "internal Server Error"
        })
    }
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log(req.body)

        console.log(email,password)

        if (!email || !password) {
            return res.json({
                status: 400,
                message: "Please Fill the all Fields"
            })
        }

        const user = await User.findOne({ email: email })

        if (!user) {
            return res.json({
                status: 400,
                message: "User Not Found"
            })
        }

        const token = json.sign({ id: user._id }, process.env.SECRET_TOKEN, { expiresIn: '1d' })



        return res.cookie('token', token, { httpOnly: true, sameSite: 'strict', maxAge: 1000 * 60 * 60 * 24 }).json({
            status: 200,
            message: "Welcome back",
            data: user
        })


    } catch (error) {
        return res.json({
            status: 500,
            message: "internal Server Error"
        })
    }
}


export const Logout = async(req,res) =>{
    try {

        const id = req.id;
        

        if(!id){
            return res.json({
                status: 400,
                message: "User not Authenticated"
            })
        }

        return res.cookie("token",'',{maxAge:0}).json({
            status: 200,
            message: "User Logout Successfully"
        })

    } catch (error) {
        return res.json({
            status: 500,
            message: "internal Server Error"
        })
    }
}

export const BuyProduct = async(req,res) =>{
    try {
        const productId = req.params;
        const Userid = req.id;

        if(!productId){
            return res.json({
                status:400,
                message:"Product Not Found"
            })
        }

        const product = await Product.findById(productId)

        if(!product){
            return res.json({
                status:400,
                message:"Product Not Exist"
            })
        }

        const buying = await User.findOneAndUpdate({_id:Userid},{$push:{buy:product}});

        if(!buying){
            return res.json({
                status:400,
                message:"Error in Buying"
            })
        }

        return res.json({
            status:200,
            message:"Thanks For Shopping",
            data:product
        })


    } catch (error) {
        return res.json({
            status: 500,
            message: "internal Server Error"
        })
    }
}