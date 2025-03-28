import { configDotenv } from 'dotenv'
import jwt from 'jsonwebtoken'


configDotenv({
    path: './.env'
})

export const authenticate = async(req,res,next) =>{
    try {

        const {token} = req.cookies

        console.log("token",token)

        if(!token){
            return res.json({
                status: 400,
                message: "User not Authenticated",
            })
        }

        const verify = jwt.verify(token,process.env.SECRET_TOKEN)

        if(!verify){
            return res.json({
                status:400,
                message:"Invalid User"
            })
        }
        
        req.id = verify?.id

        console.log("req.id",req.id)
        
        next();
           
    } catch (error) {
        console.log("authentication error",error)
        return res.json({
            status: 400,
            message: "Authentication Error",
        })
    }
}