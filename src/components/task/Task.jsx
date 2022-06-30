import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Task = ({ task, deleteTask }) => {
  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
        className="taskTrashButton"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};
