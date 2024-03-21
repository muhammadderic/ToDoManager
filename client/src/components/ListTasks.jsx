const ListData = ({ tasks }) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <ul>
      {
        tasks.map((task) => (
          <li key={task._id}>
            <p>Title: {task.title}</p>
            <p>Description: {task.description}</p>
            <p>Due Date: {
              new Date(task.dueDate).toLocaleDateString('en-US', options)}</p>
            <p>Priority: {task.priority}</p>
          </li>
        ))
      }
    </ul>
  );
};

export default ListData;