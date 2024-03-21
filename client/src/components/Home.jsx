import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import ListTasks from "../components/ListTasks";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const fetchAllTasks = () => {
    fetch("http://localhost:5000/api/v1/tasks/")
      .then(response => response.json())
      .then(data => {
        setTasks(data);
        console.log(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data: ", error.message);
        setLoading(false);
      })
  }

  return (
    <div>
      <h1>Hello Deric</h1>
      <h2>Welcome to Task Manager App</h2>
      <Link to="/addtask">
        <button>Add Task</button>
      </Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ListTasks tasks={tasks} />
      )}
    </div>
  )
}

export default Home;