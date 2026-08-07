
import mongoose, { Schema } from "mongoose";

const PropertySchema = new Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    price: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true }, // "Residential" or "Commercial"
    beds: { type: Number, default: 0 },
    baths: { type: Number, default: 0 },
    area: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true }, // "Buy", "Rent", "Sell"
    featured: { type: Boolean, default: false },
    description: { type: String, required: true },
}, { timestamps: true });

// Check if model already exists to prevent overwrite error in dev
export default mongoose.models.Property || mongoose.model("Property", PropertySchema);
