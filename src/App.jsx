import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
function App() {
  const [task, settask] = useState([])
  const addTask = (task)=>{
    settask(prev=>[...prev,task])
  }
  const altertask = (id) => {
  settask((prev) =>
    prev.map((t) =>
      t.id === id
        ? { ...t, isDone: !t.isDone }
        : t
    )
  ); 
  };
const remove = (id) => {
  settask((prev) => prev.filter((t) => t.id !== id));
};
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-amber-300 text-3xl font-bold select-none ">
        Task Maker Pro
      </h1>
      <AddTaskForm addTask={addTask}/>
      <br />
      <TaskList task={task} toggleTask={altertask} remove = {remove} />
      
    </div>
  );
}

export default App;
