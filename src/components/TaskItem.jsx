import React from "react";
import { Trash2 } from "lucide-react";
function TaskItem({ val, toggleTask, remove }) {
  return (
    <div className="bg-[#1b1b1d] flex flex-col justify-between p-3 rounded-3xl h-60 w-50 relative">
      <div className="h-5 flex  justify-between ">
        <button
          className="group flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white transition-all duration-300 px-3 py-1 rounded-full border border-red-500/20 cursor-pointer"
          onClick={()=>
          
            {
             (confirm("do you really wany to delete")) ? remove(val.id) : alert("you cancel the delete")
 }
        }
        >
          <span className="text-xs font-medium">Delete</span>
          <Trash2
            size={14}
            className="group-hover:scale-110 transition-transform"
          />
        </button>
        <input
          type="checkbox"
          checked={val.isDone}
          onChange={() => toggleTask(val.id)}
          className="w-5 h-5 accent-amber-400 cursor-pointer transition-all duration-200 "
        />
      </div>
      <h3
        className={`text-3xl font-bold ${val.isDone ? "line-through text-zinc-500" : "text-zinc-100"}`}
      >
        {val.tittle}
      </h3>

      <div className="bg-zinc-600 w-full h-px" />

      <p className="text-lg">{val.des}</p>

      <div className="bg-zinc-600 w-full h-px" />

      <div className="flex gap-2">
        <span
          className={`px-3 py-1 rounded ${
            val.priority === "Low"
              ? "bg-green-400"
              : val.priority === "Medium"
                ? "bg-yellow-300"
                : val.priority === "High"
                  ? "bg-red-400"
                  : "bg-amber-300"
          }`}
        >
          {val.priority}
        </span>

        <span className="px-3 py-1 bg-blue-400 rounded">{val.cata}</span>
      </div>
    </div>
  );
}

export default TaskItem;
