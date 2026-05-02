import React, { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import Form from "./components/Form";
import Stats from './components/Stats'
import axios from "axios";
function App() {
  const [showForm, setShowForm] = useState(false);
  const [task, settask] = useState([]);
  const [editTaskData, setEditTaskData] = useState(null);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("http://localhost:5000/tasks")
        const data = await res.json()

        settask(data.tasks ?? [])
      } catch (error) {
        console.error("Error loading tasks:", error.message)
      }
    }

    fetchTasks()
  }, [])
  const addTask = async (task) => {
    try {
      const { data } = await axios.post("http://localhost:5000/task", task)

      settask((prev) => [...prev, data.task])
    } catch (err) {
      console.error("Error adding task:", err.message)
    }
  }
  const toggleedit = (taskie) => {
    setEditTaskData(taskie);
    setShowForm(true);
  };


  const altertask = async (id) => {
    try {

      const { data } = await axios.put(
        `http://localhost:5000/task/${id}/toggle`
      )

      settask((prev) =>
        prev.map((t) =>
          t._id === id ? data.task : t
        )
      )
    } catch (err) {
      console.error("Toggle failed:", err.message)
    }
  }

  const editTask = async (id, values) => {
    try {
      const { data } = await axios.put(
        `http://localhost:5000/task/${id}`,
        values
      )

      settask((prev) =>
        prev.map((t) =>
          t._id === id ? data.updatedTask : t
        )
      )
    } catch (err) {
      console.error("Update failed:", err.message)
    }
  }
  const remove = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/task/${id}`
      )

      settask((prev) =>
        prev.filter((t) => t._id !== id)
      )
    } catch (err) {
      console.error("Delete failed:", err.message)
    }
  }

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
