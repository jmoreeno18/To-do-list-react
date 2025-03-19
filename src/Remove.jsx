export const Remove = ({ setTasks, taskId }) => {
  const handleRemove = () => {
    setTasks((prevTasks) => prevTasks.filter((_, index) => index !== taskId));
  };

  
};
