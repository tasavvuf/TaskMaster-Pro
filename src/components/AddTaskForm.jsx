import React, { useState } from "react";

function AddTaskForm({addTask}) {
    const [tittle, setTittle] = useState("")
  const [des, setdes] = useState("")
  const [Priority, setPriority] = useState("Low")
  const [cata, setcata] = useState("Work")
  const isDesable = tittle.trim()===""
  const handleSub = ()=>{
  if(tittle.trim()==="")return
    const details = {
      tittle : tittle,
      des : des,
      priority : Priority,
      cata : cata,
      id: Date.now(),
      isDone : false
    }
  addTask(details)
    setTittle("")
    setdes("")
    setcata("Work")
    setPriority("Low") 
  }

  
  return (
    <div className="h-full w-[70%] bg-[#1b1b1d] rounded p-3 ">
      <h2> add your tasks here </h2>
      <form action="">
       Title :  <input type="text" value={tittle}    name="tiltle" onChange={(value)=>{
        setTittle(value.target.value)
        
    
       }} placeholder="tittle of your task" />
       <br />
       <div className="flex gap-1.5 items-center" >
        <div >description</div>  <textarea className="bg-black rounded"
          name="description"
          value={des}
          placeholder="description of task..."
          onChange={(value)=>{
        setdes(value.target.value)
       }}
        ></textarea>

       </div>
      
        <br />
        <div> Priority </div>
        <select className="  appearance-none rounded border border-slate-200 bg-transparent py-2 pl-3 pr-8 text-sm focus:border-slate-400 focus:outline-none" onChange={(val)=>setPriority(val.target.value)} value={Priority}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <div> Category </div>
        <select className="  appearance-none rounded border border-slate-200 bg-transparent py-2 pl-3 pr-8 text-sm focus:border-slate-400 focus:outline-none"
        onChange={(val)=>setcata(val.target.value)} value={cata}>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Urgent">Urgent</option>
        </select>
        <br />
        <br />
     
      
   <button
  disabled={isDesable}
  onClick={(e) => {
    e.preventDefault();
    handleSub();
  }}
  className={`px-4 py-2 rounded-xl font-bold transition-all duration-300 border text-sm uppercase tracking-wider
    ${isDesable 
      ? "bg-red-500/10 text-red-500 border-red-500/20 cursor-not-allowed opacity-60" 
      : "bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500 hover:text-[#1b1b1d] hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] cursor-pointer active:scale-95"
    }
  `}
>
  Add Task
</button>

      </form>
    </div>
  );
}

export default AddTaskForm;
