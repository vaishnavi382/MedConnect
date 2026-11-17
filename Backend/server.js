
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
const healthRoutes = require("./routes/healthRoutes");
const doctorRoutes = require("./routes/doctorRoutes");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api/health", healthRoutes);
app.use("/api/doctors", doctorRoutes);

app.get("/", (req, res) => {
    res.send("MedConnect Backend is running");
});

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "MedConnect API is working"
    });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();
