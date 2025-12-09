const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Test route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// User routes
app.use("/api/users", require("./routes/userRoutes"));

// Start server
app.listen(8080, () => console.log("Server running on http://localhost:8080"));
