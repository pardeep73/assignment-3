import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
   name:{
    type:String, 
   },
   price:{
    type:Number,
   },
   discount:{
    type:String,
    
   },
   category:{
    type:String,
    
   }, 
   images:{
    type:Array
   } 
},{timestamps:true});

export const Product = mongoose.model('Product',productSchema);