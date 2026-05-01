import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { Search } from 'lucide-react';

const filters = [
  "All",
  "Active",
  "Completed",
  "High Priority",
  "Work",
  "Personal",
];
function TaskList({ task, toggleTask, remove , toggleedit }) {
  const [temp, settemp] = useState("") 

  const [activeFilter, setActiveFilter] = useState("All");

  const base =
    "px-4 py-2 rounded-xl font-bold transition-all duration-300 border text-sm uppercase tracking-wider cursor-pointer active:scale-95 flex gap-3 ";

  const active =
    "bg-amber-500 text-[#1b1b1d] border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]";

  const inactive =
    "bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500 hover:text-[#1b1b1d] hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]";

  const filteredTasks = (() => {
    let basetask ;
    switch (activeFilter) {
      case "Active":
        basetask =  task.filter((t) => !t.isDone);
        break
      case "Completed":
        basetask =  task.filter((t) => t.isDone);
        break
      case "High Priority":
        basetask =   task.filter((t) => t.priority === "High");
        break
      case "Work":
        basetask =   task.filter((t) => t.cata === "Work");
        break
      case "Personal":
        basetask =   task.filter((t) => t.cata === "Personal");
        break
      default:
        basetask =   task;
        break  
    }
     if(temp==""){
          return basetask
        }
       return basetask.filter((t)=>{
          return t.tittle.toLowerCase().includes(temp.toLocaleLowerCase())
        })
  })()
  const getCount = (filter) => {
  switch (filter) {
    case "Active":
      return task.filter((t) => !t.isDone).length;
    case "Completed":
      return task.filter((t) => t.isDone).length;
    case "High Priority":
      return task.filter((t) => t.priority === "High").length;
    case "Work":
      return task.filter((t) => t.cata === "Work").length;
    case "Personal":
      return task.filter((t) => t.cata === "Personal").length;
    default:
      return task.length;
  }
};
  return (
    <div className="p-2">
     <div className="flex gap-8">
       <h2 className="text-2xl">Your Tasks</h2>
       <div className="flex bg-[#3c3c3c]  p-2 rounded-full">
<Search color="#bcaeae" />      <input className=" px-2 text-zinc-200 active:border-0 bg-transparent rounded " type="text" placeholder="search here " onChange={(val)=>settemp(val.target.value)}  />
       </div>
     
    
      </div>

      <div className="flex gap-2 my-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`${base} ${activeFilter === filter ? active : inactive}`}
          >
            {filter}   
            <div>{getCount(filter)}</div>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {filteredTasks.map((val) => (
          <TaskItem
            key={val._id}
            val={val}
            toggleTask={toggleTask}
            remove={remove}
            toggleedit={toggleedit}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;