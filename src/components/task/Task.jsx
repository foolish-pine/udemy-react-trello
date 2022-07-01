import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Draggable } from "react-beautiful-dnd";

export const Task = ({ task, index, deleteTask }) => {
  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div
          className="taskBox"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
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
      )}
    </Draggable>
  );
};
