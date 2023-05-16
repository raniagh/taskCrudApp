export const ShowTask = ({ taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  const handleEdit = (id) => {
    //save id in localStorage
  };
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTaskList([])}>
          Clear All
        </button>
      </div>
      <ul>
        {taskList &&
          taskList.map((task) => (
            <li key={task.id}>
              <p>
                <span className="name">{task.name}</span>
                <span className="time">{task.time}</span>
              </p>
              <i
                className="bi bi-pencil-square"
                onClick={() => handleEdit(task.id)}
              ></i>
              <i
                className="bi bi-trash"
                onClick={() => handleDelete(task.id)}
              ></i>
            </li>
          ))}
      </ul>
    </section>
  );
};
