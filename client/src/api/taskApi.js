// Get all tasks from the server
export const getAllTasks = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/v1/tasks/");
    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
}

// Get a task from the server
export const getTask = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/v1/tasks/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch task');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching the task:', error);
    throw error;
  }
}

// Add a task to the server
export const addTask = async (newTask) => {
  try {
    const response = await fetch("http://localhost:5000/api/v1/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    if (!response.ok) {
      throw new Error('Failed to add the task');
    }
    return response.json();
  } catch (error) {
    console.error('Error to add the task:', error);
    throw error;
  }
}

// Update a task in the server
export const updateTask = async (id, updatedTaskData) => {
  try {
    const response = await fetch(`http://localhost:5000/api/v1/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedTaskData)
    });
    if (!response.ok) {
      throw new Error('Failed to update the task');
    }
    return response.json();
  } catch (error) {
    console.error("Error update the data: ", error.message);
    throw error;
  }
}

// Delete a task from the server
export const deleteTask = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/v1/tasks/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
    return response.json();
  } catch (error) {
    console.error("Error deleting data: ", error.message);
    throw error;
  }
}
