import React from "react";

function Task({text, category, onDeleteTask}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={e => {onDeleteTask(text)}}>X</button>
    </div>
  );
}

export default Task;
