import mongoose from "mongoose";


const specification = new mongoose.Schema({
    brand: { type: String },
    owner: { type: String },
    movement: { type: String }, // Type of internal mechanism (e.g., quartz, automatic)   
    material: { type: String }, // What the band/strap is made of
    caseSize: { type: String }, // Diameter or dimensions (e.g., 42mm)
    waterResistance: { type: String }, // Water resistance rating (e.g., 50m)
}, { timestamps: true });

export const Specification = mongoose.model('Specification', specification);


