export const FormToDo = ({ task, setTask, tasks, setTasks }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === "") return;

    const newTask = { text: task, completed: false };
    setTasks([...tasks, newTask]);
    setTask("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row justify-center mt-12"
    >
      <input
        type="text"
        placeholder="Escriba su tarea..."
        className="bg-white w-1/4 flex justify-center items-center rounded-full text-black font-semibold placeholder:text-black placeholder:font-bold focus:outline-2 focus:outline-cyan-300 py-1 px-2"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="submit"
        className="bg-cyan-300 text-black font-bold hover:bg-cyan-400 rounded-full cursor-pointer py-1 px-2 duration-200 mx-2"
      >
        Enviar
      </button>
    </form>
  );
};
