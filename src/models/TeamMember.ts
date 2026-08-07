
import mongoose, { Schema } from "mongoose";

const TeamMemberSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    role: { type: String, required: true }, // "Founder", "Sales Head"
    bio: { type: String, required: false },
    image: { type: String, required: true },
    phone: { type: String, required: false },
    email: { type: String, required: false },
}, { timestamps: true });

export default mongoose.models.TeamMember || mongoose.model("TeamMember", TeamMemberSchema);
