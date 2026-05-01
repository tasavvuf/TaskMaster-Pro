import React, { useState } from 'react'

function Form({ task,editTask , toggleedit }) { 
    const [title, setTittle] = useState(task.tittle)
      const [des, setdes] = useState(task.des)
        const [Priority, setPriority] = useState(task.priority)
        const [cata, setcata] = useState(task.cata)
       
        const handleSub=()=>{
            const details = {
      tittle : title,
      des : des,
      priority : Priority,
      cata : cata,
      
    }
    editTask(task._id,details)
     toggleedit()
        }
  return (
   <div className="h-full w-full bg-[#1b1b1d] mt-5 rounded p-3">
      <h2> add your tasks here </h2>
      <form action="">
       Title :  <input type="text" value={title}   name="tiltle" onChange={(value)=>{
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
     
      
   <div className='flex gap-5'>
    <button
  onClick={(e) => {
    e.preventDefault();
    handleSub();
  }}
  className="px-4 py-2 rounded-xl font-bold transition-all duration-300 border text-sm uppercase tracking-wider
   bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500 hover:text-[#1b1b1d] hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] cursor-pointer active:scale-95"
   
>
  submit
</button>
<button className=' bg-red-300/10 hover:bg-red-500 text-red-500 hover:text-white transition-all duration-300 px-4 py-2 rounded-xl font-bold border border-red-500/20 cursor-pointer text-sm active:scale-95' onClick={()=>{toggleedit()}}>Cancel</button>
    </div>
      </form>
    </div>
  );
  
}

export default Form