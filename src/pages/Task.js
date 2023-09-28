import React from 'react'

const Task = ({task, completeTask}) => {
  return (
    <div className='task' onClick = {() => completeTask(task)}><h2 style={{color: task.completed ? "green" : "red"}} >{task.name}</h2></div>
  )
}

export default Task