const ListData = ({ tasks }) => {
  return (
    <ul>
      {
        tasks.map((task) => (
          <li key={task._id}>
            <p>Title: {task.title}</p>
            <p>Description: {task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Priority: {task.priority}</p>
          </li>
        ))
      }
    </ul>
  );
};

export default ListData;