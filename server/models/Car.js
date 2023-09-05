import { Schema } from "mongoose"



export const CarSchema = new Schema(
    {
        make: { type: String, required: true, minlength: 3, maxlength: 15 },
        model: { type: String, required: true, minlength: 3, maxlength: 30 },
        year: { type: Number, required: true, min: 1960, max: new Date().getFullYear() + 10 },
        price: { type: Number, required: true, min: 1, max: 10000000 },
    }

)