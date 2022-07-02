import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export const TaskCards = () => {
  const taskCardId = uuidv4();

  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: taskCardId,
      draggableId: `draggable-${taskCardId}`,
    },
  ]);

  const handleCardDragEnd = (result) => {
    // カードを並び替える
    const remove = taskCardsList.splice(result.source.index, 1);
    taskCardsList.splice(result.destination.index, 0, remove[0]);
  };

  return (
    <DragDropContext onDragEnd={(result) => handleCardDragEnd(result)}>
      <Droppable droppableId="droppableCards" direction="horizontal">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="taskCardsArea"
          >
            {taskCardsList.map((taskCards, index) => (
              <TaskCard
                key={taskCards.id}
                id={taskCards.id}
                index={index}
                draggableId={taskCards.draggableId}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
