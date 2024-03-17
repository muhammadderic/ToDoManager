const express = require("express");
const router = express.Router();

const taskRoutes = require("./taskRoutes");

// Tasks routes
router.use("/tasks", taskRoutes);

module.exports = router;