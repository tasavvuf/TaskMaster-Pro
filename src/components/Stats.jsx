import React from "react";
import {PieChart,  Pie, Tooltip } from "recharts";
import SegmentedProgress from "./SegmentedProgress";

function Stats({task}) {
const completed = task.filter(t => t.isDone).length
const pending = task.filter(t => !t.isDone).length
const completionPercentage = task.length === 0 ? 0 : Math.floor((completed / task.length) * 100)
const data = [
  { name: "Completed", value: completed, fill: "#a1a1aa" }, // zinc-400
  { name: "Pending", value: pending, fill: "#3f3f46" },     // zinc-700
]
  
  return (
    <div className="bg-[#1b1b1d] w-[30%] text-zinc-100  gap-4 font-bold flex flex-col text-xl justify-center rounded items-center  hover:border-fuchsia-500/60 border-2 border-zinc-700 transition-all duration-300  ">
      <div>Total tasks: {task.length}</div>
     <div> Completion percentage {completionPercentage} % </div>
   <div className="mt-3 w-full px-4">
  <SegmentedProgress completed={completed} total={task.length} />
</div>
     
   <PieChart width={200} height={200}>
  <Pie
    data={data}
    dataKey="value"
    cx="50%"
    cy="50%"
    outerRadius={80}
     stroke="#18181b"
  />
  <Tooltip />
</PieChart>
    </div>
  );
}

export default Stats;
