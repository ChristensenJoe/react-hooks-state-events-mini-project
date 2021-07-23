import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDeleteTask, selectedCategory}) {


  return (
    <div className="tasks">
      {tasks.map((task) => {
        return (
          <Task
            class="task" 
            text={task.text} 
            category={task.category}
            onDeleteTask={handleDeleteTask}
            key={task.text}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
