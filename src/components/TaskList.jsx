import React, { useState } from 'react'
import TaskItem from './TaskItem'

const filters = ["All", "Active", "Completed" ,  "High Priority", "Work", "Personal"];
function TaskList({ task, toggleTask, remove }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const base =
    "px-4 py-2 rounded-xl font-bold transition-all duration-300 border text-sm uppercase tracking-wider cursor-pointer active:scale-95";

  const active =
    "bg-amber-500 text-[#1b1b1d] border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]";

  const inactive =
    "bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500 hover:text-[#1b1b1d] hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]";

   const filteredTasks = (() => {
  switch (activeFilter) {
    case "Active":
      return task.filter((t) => !t.isDone);
    case "Completed":
      return task.filter((t) => t.isDone);
    case "High Priority":
      return task.filter((t) => t.priority === "High");
    case "Work":
      return task.filter((t) => t.cata === "Work");
    case "Personal":
      return task.filter((t) => t.cata === "Personal");
    default:
      return task;
  }
})();
  return (
    <div className="p-2">
      <h2 className="text-2xl">Your Tasks</h2>

      <div className="flex gap-2 my-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`${base} ${
              activeFilter === filter ? active : inactive
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {filteredTasks.map((val) => (
          <TaskItem
            key={val.id}
            val={val}
            toggleTask={toggleTask}
            remove={remove}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;