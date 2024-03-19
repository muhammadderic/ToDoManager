const taskController = {
  // Get all tasks
  getAllTasks: (req, res) => {
    res.send("Get all tasks");
  },
  // Get a task
  getTask: (req, res) => {
    res.send("Get a task");
  },
  // Create a task
  createTask: (req, res) => {
    res.send("Create a task");
  },
  // Update a task
  updateTask: (req, res) => {
    res.send("Update a task");
  },
  // Delete a task
  deleteTask: (req, res) => {
    res.send("Delete a task");
  }
}

module.exports = taskController;