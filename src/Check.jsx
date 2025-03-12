export const Check = ({ setTasks, taskId }) => {
  const handleCheck = (taskId) => {
    setTasks((prevTask) =>
      prevTask.map((item, index) =>
        taskId === index ? { ...item, completed: !item.completed } : item
      )
    );
  };
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="green"
        className="size-7 ml-2 flex justify-center items-center cursor-pointer"
        onClick={() => handleCheck(taskId)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 6 6 9-13.5"
        />
      </svg>
    </>
  );
};
