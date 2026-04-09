import React from "react";

function Stats({task}) {
  return (
    <div className="bg-[#1b1b1d] w-[30%] text-zinc-100  gap-4 font-bold flex flex-col text-xl justify-center rounded items-center ">
      <div>Total tasks: {task.length}</div>
      <div>Completed tasks : {task.filter((t) => t.isDone).length} </div>
      <div>Pending tasks : {task.filter((t) => !t.isDone).length} </div>
     <div> Completion percentage {Math.floor((task.filter((t) => t.isDone).length / task.length) *100) } % </div>
    </div>
  );
}

export default Stats;
