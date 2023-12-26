const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const optionsSchema = new Schema({
    question_id: {type: String},
    a: { type: String, },
    b: { type: String, },
    c: { type: String },
    d: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Option', optionsSchema);