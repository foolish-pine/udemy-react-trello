import { Task } from "./Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export const Tasks = ({ taskList, deleteTask, handleDragEnd }) => {
  return (
    <div>
      <DragDropContext onDragEnd={(result) => handleDragEnd(result)}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <Task
                  task={task}
                  key={task.id}
                  index={index}
                  deleteTask={deleteTask}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
