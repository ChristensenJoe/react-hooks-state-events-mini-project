import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasksList, setTasksList] = useState(TASKS);

  function handleDeleteTask(text) {
    setTasksList(tasksList.filter((task) => {
      if(task.text === text) return false;
      return true;
    }));
  }

  function handleAddTask(newTask) {
    setTasksList((tasksList) => [...tasksList, newTask])
  }

  function handleCategoryButtonClick(category) {
    setSelectedCategory(category);
  }

  const filteredTasks = tasksList.filter(task => {
    if(selectedCategory === "All") return true;
    else if(task.category === selectedCategory) return true;
    return false;
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryButtonClick={handleCategoryButtonClick}/>
      <NewTaskForm 
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList 
        tasks={filteredTasks}
        handleDeleteTask={handleDeleteTask}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default App;
