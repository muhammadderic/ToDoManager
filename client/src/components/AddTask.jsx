import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/home.css";
import "../styles/addtask.css";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getEditTaskData(id);
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
      dueDate,
      priority,
    };

    try {
      if (id) {
        const response = await fetch(`http://localhost:5000/api/v1/tasks/${id}`, {
          method: "PUT",
        })

        if (!response.ok) {
          throw new Error("Failed to add task");
        }
      } else {
        const response = await fetch("http://localhost:5000/api/v1/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTask),
        })

        console.log(response);

        if (!response.ok) {
          throw new Error("Failed to add task");
        }
      }

      setTitle("");
      setDescription("");
      setDueDate("");
      setPriority("");
    } catch (error) {
      console.error("Error", error.message);
    }
  }

  const formatDate = (dateString) => {
    // Parse the ISO 8601 date string into a Date object
    const date = new Date(dateString);

    // Extract year, month, and day from the Date object
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    // Construct the formatted date string in yyyy-MM-dd format
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  const getEditTaskData = async (id) => {
    const response = await fetch(`http://localhost:5000/api/v1/tasks/${id}`)
    const task = await response.json();
    setTitle(task.title);
    setDescription(task.description);
    const formattedDate = formatDate(task.dueDate);
    setDueDate(formattedDate);
    setPriority(task.priority);
  }

  return (
    <div className="container">
      <h2 className="page__title">{id ? "Edit" : "Add Task"}</h2>
      <Link to="/">
        <button className="button">Back</button>
      </Link>
      <form onSubmit={handleSubmit} className="addtask__form">
        <div className="form__input-field">
          <label htmlFor="title">Title: </label>
          <br />
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required />
        </div>

        <div className="form__input-field">
          <label htmlFor="description">Description: </label>
          <br />
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required />
        </div>

        <div className="form__input-field">
          <label htmlFor="dueDate">Due Date: </label>
          <br />
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required />
        </div>

        <div className="form__input-field">
          <label htmlFor="priority">Priority Level: </label>
          <br />
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}>
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="form__submit-field">
          <button className="button addtask__form-button" type="submit">{id ? "Finish Edit" : "Submit"}</button>
        </div>
      </form>
    </div>
  )
}

export default AddTask;