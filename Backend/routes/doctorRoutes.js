
const express = require("express");
const bcrypt = require("bcryptjs");
const Doctor = require("../models/Doctor");

const router = express.Router();

// Doctor Registration API
router.post("/register", async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            specialization,
            experience,
            fees,
            phone
        } = req.body;

        if (!name || !email || !password || !specialization || fees == null) {
            return res.status(400).json({
                message: "Please provide all required fields"
            });
        }

        const existingDoctor = await Doctor.findOne({ email });

        if (existingDoctor) {
            return res.status(409).json({
                message: "Doctor email already registered"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const doctor = await Doctor.create({
            name,
            email,
            password: hashedPassword,
            specialization,
            experience,
            fees,
            phone
        });

        res.status(201).json({
            message: "Doctor registered successfully",
            doctor: {
                id: doctor._id,
                name: doctor.name,
                email: doctor.email,
                specialization: doctor.specialization,
                experience: doctor.experience,
                fees: doctor.fees,
                phone: doctor.phone
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Doctor registration failed",
            error: error.message
        });
    }
});

module.exports = router;
