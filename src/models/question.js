const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const questionSchema = new Schema({
    course_id: { type: String },
    course_code: { type: String, },
    question: { type: String, },
    mark: { type: Number, },
    type: { type: String, },
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);