const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const middlewares = require("./middlewares/middlewares");
const routes = require("./routes");
const errorHandler = require("./middlewares/errors/errorHandler");

// Initialize Express application
const app = express();

// Variable env configuration
dotenv.config({ path: path.join(__dirname, "config", ".env") });

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
middlewares(app);

// Routes handler
app.use("/api/v1", routes)

// Error handling middleware
app.use(errorHandler);

module.exports = app;