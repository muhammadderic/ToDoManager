const ListData = ({
  tasks,
  deleteTaskHandler,
  editTaskHandler
}) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <ul className="task__items">
      {
        tasks.map((task) => (
          <li className="task__item" key={task._id}>
            <div>
              <p>Title: {task.title}</p>
              <p>Description: {task.description}</p>
              <p>Due Date: {
                new Date(task.dueDate).toLocaleDateString('en-US', options)}</p>
              <p>Priority: {task.priority}</p>
            </div>
            <div className="task__buttons">
              <button className="button" onClick={() => deleteTaskHandler(task._id)}>Delete</button>
              <button className="button" onClick={() => editTaskHandler(task._id)}>Edit</button>
            </div>
          </li>
        ))
      }
    </ul>
  );
};

export default ListData;