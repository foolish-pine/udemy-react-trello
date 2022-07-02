import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const TaskCardDeleteButton = ({
  id,
  taskCardsList,
  setTaskCardsList,
}) => {
  const deleteTaskCard = () => {
    const newTaskCardsList = taskCardsList.filter(
      (taskCard) => taskCard.id !== id
    );
    setTaskCardsList(newTaskCardsList);
  };

  return (
    <div>
      <button className="taskCardDeleteButton" onClick={deleteTaskCard}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
};
