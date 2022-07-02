import { v4 as uuidv4 } from "uuid";
export const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {
  const addTaskCard = () => {
    const taskCardId = uuidv4();
    const newTaskCardsList = [
      ...taskCardsList,
      {
        id: taskCardId,
        draggableId: `draggable-${taskCardId}`,
      },
    ];

    setTaskCardsList(newTaskCardsList);
  };

  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};
