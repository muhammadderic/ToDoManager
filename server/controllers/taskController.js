const Task = require("../models/taskModel");
const expressValidator = require("express-validator");
const { validationResult } = expressValidator;

const taskController = {
  // Get all tasks
  getAllTasks: async (req, res, next) => {
    try {
      const tasks = await Task.find();
      res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  },

  // Get a task
  getTask: async (req, res, next) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  },

  // Create a task
  createTask: async (req, res, next) => {
    try {
      // Apply validation middleware before saving the task
      const errors = validationResult(req); // Check for validation errors

      if (!errors.isEmpty()) {
        // Return errors if validation fails
        return res.status(400).json({ errors: errors.array() });
      }

      const newTask = new Task(req.body);
      await newTask.save();
      res.status(201).json({ message: "Task created successfully" });
    } catch (error) {
      next(error);
    }
  },

  // Update a task
  updateTask: async (req, res, next) => {
    try {
      const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.status(200).json(updatedTask);
    } catch (error) {
      next(error);
    }
  },

  // Delete a task
  deleteTask: async (req, res, next) => {
    try {
      const deletedTask = await Task.findByIdAndDelete(req.params.id);
      if (!deletedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = taskController;