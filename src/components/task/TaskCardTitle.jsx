import { useState } from "react";

export const TaskCardTitle = () => {
  const CARD_TITLE = "Today";

  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState(CARD_TITLE);

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCardTitle === "") {
      setInputCardTitle(CARD_TITLE);
    }
    setIsClick(false);
  };

  const handleBlur = () => {
    if (inputCardTitle === "") {
      setInputCardTitle(CARD_TITLE);
    }
    setIsClick(false);
  };

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
            autoFocus
            maxLength="10"
            className="taskCardTitleInput"
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};
