const express = require("express");
const router = express.Router();

const taskRoutes = require("./taskRoutes");

// Routes to manage all tasks
router.use("/tasks", taskRoutes);

module.exports = router;