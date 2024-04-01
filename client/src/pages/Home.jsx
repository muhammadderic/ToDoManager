import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/home.css";

import ListTasks from "../components/ListTasks";
// DEV ONLY [1]
import jsonData from '../backup-data.json';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    // fetchAllTasks();
    // DEV ONLY [2]
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

  // DEV ONLY [3 Last]
  const DEVMODE = () => {
    setTasks(jsonData);
    setLoading(false);
  }

  return (
    <div className="container">
      <div className="title-container">
        <h1 className="home__title">Your Task Manager</h1>
        <h2 className="home__subtitle">Welcome to Task Manager App</h2>
      </div>
      <Link className="home__add-task__button" to="/addtask">
        <button className="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-message-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 9h8" /><path d="M8 13h6" /><path d="M12.01 18.594l-4.01 2.406v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
        </button>
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