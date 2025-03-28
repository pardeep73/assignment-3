import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv({
    path:'./.env'
})



export const ConnectDB = async() =>{
    try {
        await mongoose.connect(`${process.env.MONGO_DB}\Ecommerce`)
        console.log("Database Connected Successfully")
    } catch (error) {
        console.log("error while connected the database :-",error);
        throw error;
    }
}