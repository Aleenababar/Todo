import React, { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState([
    "eat Something",
    "take a shower",
    "go to the bed",
    "irritating me",
  ]);
  const [newTasks, setNewTasks] = useState("");
  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }
  function addTask() {
    if (newTasks.trim() !== "") {
        setTasks(t=>[...t,newTasks])
    setNewTasks("");
        
    }
  }
  function deleteTask(index) {
    const updatedTask= tasks.filter((_,i) =>i !== index)
    setTasks(updatedTask);

  }
  function moveUpTask(index) {
    if (index >0) {
        const updatedTask = [...tasks];
        [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]]
        setTasks(updatedTask);
    }
  }
  function moveDownTask(index) {
    if (index < tasks.length-1) {
        const updatedTask = [...tasks];
        [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]]
        setTasks(updatedTask);
    }
  }

  return (
    <div className="to-do-list">
      <h1>ToDO List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTasks}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-btn" onClick={() => moveUpTask(index)}>
              🔺{" "}
            </button>
            <button className="move-btn" onClick={() => moveDownTask(index)}>
              🔻{" "}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
