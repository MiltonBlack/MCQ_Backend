const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const courseSchema = new Schema({
    user_id: { type: String },
    title: { type: String, },
    courseCode: { type: String, },
    semester:{type: String},
    timeAllowed:{type: String},
    lecturerName: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);