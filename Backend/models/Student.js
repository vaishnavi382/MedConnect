
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
        studentId: {
            type: String,
            trim: true
        },
        department: {
            type: String,
            trim: true
        },
        year: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
