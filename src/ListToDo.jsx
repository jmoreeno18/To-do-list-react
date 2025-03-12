import { Check } from "./check";
import { Remove } from "./Remove";

export const ListToDo = ({ setTasks, tasks }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <ol className="mt-12 w-1/2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`text-xl sm:text-2xl flex items-center justify-between border-b border-gray-700 py-1 ${
              task.completed ? "line-through text-gray-500" : "text-white"
            }`}
          >
            <span>
              {index + 1}. {task.text}
            </span>
            <div className="flex items-center space-x-2">
              <Check setTasks={setTasks} taskId={index} />
              <Remove setTasks={setTasks} taskId={index} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
