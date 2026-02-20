import mongoose from 'mongoose';

const InquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: false },
    message: { type: String, required: true },
    status: { type: String, default: 'new' }, // new, contacted, closed
}, { timestamps: true });

export default mongoose.models.Inquiry || mongoose.model('Inquiry', InquirySchema);
