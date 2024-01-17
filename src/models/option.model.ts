import mongoose, {Schema} from "mongoose";

const optionsSchema = new Schema({
    question_id: {type: String},
    a: { type: String, },
    b: { type: String, },
    c: { type: String },
    d: { type: String },
}, { timestamps: true });

export const OptionModel = mongoose.model('Option', optionsSchema);