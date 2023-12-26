const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const authSchema = new Schema({
    isAdmin: { type: Boolean, default: false },
    email: { type: String, unique: true },
    firstName: { type: String, },
    lastName: { type: String, },
    schoolName: { type: String, },
    password: { type: String },
    accessID: { type: String, default: "" },
}, { timestamps: true });

module.exports = mongoose.model('Auth', authSchema);