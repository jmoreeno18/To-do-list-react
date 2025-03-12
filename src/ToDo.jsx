import { useEffect, useState } from "react";
import { ListToDo } from "./ListToDo";
import { FormToDo } from "./formToDo";

export const ToDo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <FormToDo
        task={task}
        setTask={setTask}
        tasks={tasks}
        setTasks={setTasks}
      />
      <ListToDo tasks={tasks} setTasks={setTasks} />
    </>
  );
};
