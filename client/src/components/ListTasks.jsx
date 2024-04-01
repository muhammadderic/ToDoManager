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
              <p className="task__item-title">Title: {task.title}</p>
              <p>Description: {task.description}</p>
              <p>Due Date: {
                new Date(task.dueDate).toLocaleDateString('en-US', options)}</p>
              <p>Priority: &nbsp;
                <span
                  className={`task__item-priority-color
                  ${task.priority === 'High' ? 'priority-high' : task.priority === 'Medium' ? 'priority-medium' : 'priority-low'}`}>
                  {task.priority}</span></p>
            </div>
            <div className="task__buttons">
              <button className="button" onClick={() => deleteTaskHandler(task._id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
              </button>
              <button className="button" onClick={() => editTaskHandler(task._id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-pencil"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>
              </button>
            </div>
          </li>
        ))
      }
    </ul>
  );
};

export default ListData;