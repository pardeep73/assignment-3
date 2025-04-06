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
   specification:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Specification'
    
   }, 
   images:{
    type:Array
   } 
},{timestamps:true});

export const Product = mongoose.model('Product',productSchema);