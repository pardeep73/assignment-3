import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
   username: {
      type: String,
      unique: true,
      trim: true
   },
   email: {
      type: String,
      unique: true,
      lowercase: true
   },
   password: {
      type: String,
      trim: true
   },
   products: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
   }],
   buy: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
   }]
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);