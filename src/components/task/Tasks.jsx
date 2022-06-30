import { Task } from "./Task";

export const Tasks = ({ taskList, deleteTask }) => {
  return (
    <div>
      {taskList.map(({ task }) => (
        <Task task={task} key={task.id} deleteTask={deleteTask} />
      ))}
    </div>
  );
};
