const Task = require("../models/taskModel");

const taskController = {
  // Get all tasks
  getAllTasks: async (req, res) => {
    try {
      const tasks = await Task.find();
      res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  },

  // Get a task
  getTask: async (req, res) => {
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
  createTask: async (req, res) => {
    try {
      const newTask = new Task(req.body);
      console.log(newTask);
      await newTask.save();
      // res.status(201).json({ message: "Task created successfully" });
      res.redirect("/create");
    } catch (error) {
      next(error);
    }
  },

  // Update a task
  updateTask: async (req, res) => {
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
  deleteTask: async (req, res) => {
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