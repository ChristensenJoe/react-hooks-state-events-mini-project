import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit}) {
  const [newTask, setNewTask] = useState({
    text: "",
    category: "Code"
  });

  function handleTaskData(e) {
    setNewTask((newTask) => {return {
      ...newTask,
      [e.target.name]: e.target.value
    }});
  }

  function handleSubmitTask(event) {
    event.preventDefault();
    onTaskFormSubmit(newTask);
    setNewTask({
      text: "",
      category: "Code"
    })
  }

  return (
    <form onSubmit={handleSubmitTask} className="new-task-form">
      <label>
        Details
        <input 
          onChange={handleTaskData}
          type="text" 
          name="text" 
          value={newTask.text}
        />
      </label>
      <label>
        Category
        <select 
          name="category"
          onChange={handleTaskData}
          value={newTask.category}
        >
          <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Misc">Misc</option>
        </select>
      </label>
      <input 
        type="submit" 
        value="Add task" 
      />
    </form>
  );
}

export default NewTaskForm;
