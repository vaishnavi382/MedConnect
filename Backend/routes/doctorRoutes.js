
const express = require("express");
const bcrypt = require("bcryptjs");
const Doctor = require("../models/Doctor");
const jwt = require("jsonwebtoken");

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


// Doctor Login API
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const doctor = await Doctor.findOne({ email });

        if (!doctor) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            doctor.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            { id: doctor._id, role: "doctor" },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({
            message: "Doctor login successful",
            token,
            doctor: {
                id: doctor._id,
                name: doctor.name,
                email: doctor.email,
                specialization: doctor.specialization
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Doctor login failed",
            error: error.message
        });
    }
});

module.exports = router;
