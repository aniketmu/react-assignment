import React from 'react'

const Task = (props) => {
  return (
    <div className='task' onClick = {() => props.completeTask(props.task)}><h2 style={{color: props.task.completed ? "green" : "red"}} >{props.task.name}</h2></div>
  )
}

export default Task