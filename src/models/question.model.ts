import mongoose, {Schema} from "mongoose";

const questionSchema = new Schema({
    course_id: { type: String },
    course_code: { type: String, },
    question: { type: String, },
    mark: { type: Number, },
    type: { type: String, },
}, { timestamps: true });

export const QuestionModel = mongoose.model('Question', questionSchema);