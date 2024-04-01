const express = require("express");
const router = express.Router();

const validator = require("../middlewares/validator");

const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

router.get("/", getAllTasks);

router.get("/:id", getTask);

router.post("/", validator.validateTaskCreation, createTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

module.exports = router;