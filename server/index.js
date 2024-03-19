const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const routes = require("./routes");
const connectDB = require("./config/db");

// Initialize Express application
const app = express();

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Variable env configuration
dotenv.config({ path: path.join(__dirname, "config", ".env") });

// Connect to DB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes handler
app.use("/api/v1", routes)

// View routes handler
app.use("/create", (req, res) => {
  res.render("pages/AddTask");
})
app.use("/", (req, res) => {
  res.render("pages/home");
})

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