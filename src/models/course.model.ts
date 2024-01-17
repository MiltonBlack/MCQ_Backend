import mongoose, {Schema} from "mongoose";

const courseSchema = new Schema({
    user_id: { type: String },
    title: { type: String, },
    courseCode: { type: String, },
    semester:{type: String},
    timeAllowed:{type: String},
    lecturerName: { type: String },
}, { timestamps: true });

export const CourseModel = mongoose.model('Course', courseSchema);
