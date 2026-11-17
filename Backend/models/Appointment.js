
const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
    {
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true
        },
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
            required: true
        },
        appointmentDate: {
            type: Date,
            required: true
        },
        selectedSlot: {
            type: String,
            required: true
        },
        tokenNumber: {
            type: Number
        },
        status: {
            type: String,
            enum: ["Pending", "Confirmed", "Cancelled", "Completed"],
            default: "Pending"
        },
        remarks: {
            type: String,
            default: ""
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
