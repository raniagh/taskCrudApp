export const AddTask = ({ taskList, setTaskList }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const date = new Date();

    const newTask = {
      id: date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };
    setTaskList([...taskList, newTask]);
    e.target.task.value = "";
  };
  return (
    <section className="addTask">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="add task"
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};
