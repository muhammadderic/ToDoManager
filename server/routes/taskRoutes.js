const express = require("express");
const router = express.Router();

// Routes for tasks
router.get("/", (req, res) => {
  res.send("Get all tasks");
})

router.get("/:d", (req, res) => {
  res.send("Get a task");
})

router.post("/", (req, res) => {
  res.send("Create a task");
})

router.put("/:id", (req, res) => {
  res.send("Update a task");
})

router.delete("/:id", (req, res) => {
  res.send("Delete a task");
})

module.exports = router;