import mongoose, {Schema} from "mongoose";

const authSchema = new Schema({
    isAdmin: { type: Boolean, default: false },
    email: { type: String, unique: true },
    firstName: { type: String, },
    lastName: { type: String, },
    schoolName: { type: String, },
    password: { type: String },
    accessID: { type: String, default: "" },
}, { timestamps: true });

export const Auth = mongoose.model('Auth', authSchema);