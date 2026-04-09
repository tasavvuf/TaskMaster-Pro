import React, { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import Form from "./components/Form";
import Stats from './components/Stats'
function App() {
  const [showForm, setShowForm] = useState(false);
  const [task, settask] = useState([]);
  const [editTaskData, setEditTaskData] = useState(null);
    useEffect(() => {
    // Load tasks from localStorage on mount
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      settask(JSON.parse(savedTasks));
    }
  }, []);
  useEffect(() => {
    // Save tasks to localStorage whenever tasks change
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);
  const addTask = (task) => {
    settask((prev) => [...prev, task]);
  };
  const toggleedit = (taskie) => {
    setEditTaskData(taskie);
    setShowForm(true);
  };
  const altertask = (id) => {
    settask((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)),
    );
  };
  const editTask = (id, values) => {
    settask((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              tittle: values.tittle,
              des: values.des,
              priority: values.priority,
              cata: values.cata,
            }
          : t,
      ),
    );
  };
  const remove = (id) => {
    settask((prev) => prev.filter((t) => t.id !== id));
  };


  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-amber-300 text-3xl font-bold select-none w-full ">
        Task Maker Pro
      </h1>
      <div className="flex h=full gap-3 mt-5 rounded p-3 ">
        <AddTaskForm addTask={addTask} />
        <Stats  task={task}  />
      </div>
      <br />
      {showForm ? (
        <Form
          editTask={editTask}
          task={editTaskData}
          toggleedit={() => {
            setShowForm(false);
          }}
        />
      ) : (
        <TaskList
          task={task}
          toggleTask={altertask}
          remove={remove}
          toggleedit={toggleedit}
        />
      )}
    </div>
  );
}

export default App;
