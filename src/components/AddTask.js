export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const date = new Date();
    if (task.id) {
      const updatedTaskList = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTaskList(updatedTaskList);
    } else {
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTaskList([...taskList, newTask]);
    }
    setTask({});
  };
  return (
    <section className="addTask">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="add task"
          value={task.name || ""}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};
