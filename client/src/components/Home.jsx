import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/home.css";

import ListTasks from "../components/ListTasks";
// import JSON only for Development
import jsonData from '../backup-data.json';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    // fetchAllTasks();
    DEVMODE();
  }, []);

  const fetchAllTasks = () => {
    fetch("http://localhost:5000/api/v1/tasks/")
      .then(response => response.json())
      .then(data => {
        setTasks(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data: ", error.message);
        setLoading(false);
      })
  }

  const deleteTaskHandler = async (id) => {
    await fetch(`http://localhost:5000/api/v1/tasks/${id}`, {
      method: "DELETE",
    }).catch(error => {
      console.error("Error deleting data: ", error.message);
    })
    fetchAllTasks();
  }

  const editTaskHandler = (id) => {
    navigate(`/addtask/${id}`);
  }

  const DEVMODE = () => {
    setTasks(jsonData);
    setLoading(false);
  }

  return (
    <div className="home-container">
      <h1 className="home__title">Hello Deric</h1>
      <h2 className="home__subtitle">Welcome to Task Manager App</h2>
      <Link className="home__add-task__button" to="/addtask">
        <button className="button">Add Task</button>
      </Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ListTasks
          tasks={tasks}
          deleteTaskHandler={deleteTaskHandler}
          editTaskHandler={editTaskHandler} />
      )}
    </div>
  )
}

export default Home;