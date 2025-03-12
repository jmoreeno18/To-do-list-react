export const Remove = ({ setTasks, taskId }) => {
  const handleRemove = () => {
    setTasks((prevTasks) => prevTasks.filter((_, index) => index !== taskId));
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="red"
      className="size-7 flex justify-center items-center cursor-pointer"
      onClick={handleRemove}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};
