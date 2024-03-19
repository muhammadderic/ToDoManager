const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const routes = require("./routes");
const connectDB = require("./config/db");

// Initialize Express application
const app = express();

// Variable env configuration
dotenv.config({ path: path.join(__dirname, "config", ".env") });

// Connect to DB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes handler
app.use("/api/v1", routes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong" });
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})