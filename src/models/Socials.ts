
import mongoose, { Schema } from "mongoose";

const SocialsSchema = new Schema({
    facebook: { type: String, required: false },
    twitter: { type: String, required: false },
    instagram: { type: String, required: false },
    linkedin: { type: String, required: false },
    email: { type: String, required: false },
    phone: { type: String, required: false },
    address: { type: String, required: false },
    googleMapUrl: { type: String, required: false },
    officeImage: { type: String, required: false },
    officeHours: { type: String, required: false },
    teamGroupPhoto: { type: String, required: false },
    teamDescription: { type: String, required: false },
    heroImage: { type: String, required: false },
    whyUsImage: { type: String, required: false },
    aboutImage: { type: String, required: false },
}, { timestamps: true });

// We only need one document for socials, so let's enforce a singleton pattern if we can,
// or just findOne() always.
export default mongoose.models.Socials || mongoose.model("Socials", SocialsSchema);
