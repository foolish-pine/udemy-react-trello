import { useState } from "react";
import { TaskCardTitle } from "./TaskCardTitle";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskAddInput } from "./input/TaskAddInput";
import { Tasks } from "./Tasks";
import { Draggable } from "react-beautiful-dnd";

export const TaskCard = ({
  id,
  index,
  draggableId,
  taskCardsList,
  setTaskCardsList,
}) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  const deleteTask = (id) => {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  };

  const handleTaskDragEnd = (result) => {
    // タスクを並び替える
    const remove = taskList.splice(result.source.index, 1);
    taskList.splice(result.destination.index, 0, remove[0]);
  };

  return (
    <Draggable index={index} draggableId={draggableId}>
      {(provided) => (
        <div
          className="taskCard"
          key={id}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div
            className="taskCardTitleAndTaskCardDeleteButtonArea"
            {...provided.dragHandleProps}
          >
            <TaskCardTitle />
            <TaskCardDeleteButton
              id={id}
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <Tasks
            taskList={taskList}
            deleteTask={deleteTask}
            handleTaskDragEnd={handleTaskDragEnd}
          />
        </div>
      )}
    </Draggable>
  );
};
