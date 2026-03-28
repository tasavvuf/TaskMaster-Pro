import React from 'react'
import TaskItem from './TaskItem'

function TaskList({task , toggleTask , remove}) {
  return (
    <div className='p-2'>
      <h2 className="text-2xl ">Your Tasks</h2>
      <br />
   <div className="flex flex-wrap gap-2">
      {task.map((val) => (
        <TaskItem key={val.id} val={val} toggleTask={toggleTask} remove = {remove}/>
      ))}
    </div>
      </div>
  )
}

export default TaskList