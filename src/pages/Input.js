import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Input = ({addTask, reset}) => {
    const [input, setInput] = useState("");
    const [taskId, setTaskId] = useState(1)

    const handleChange = (e) => {
        setInput(e.target.value)
    };

    const handleKeyChange = (e) => {
        if(e.key === 'Enter' && input.trim() !== ''){
            addTask({id: uuidv4(), name: input, completed: false});
            console.log(input)
            setInput("")
            setTaskId(taskId + 1)
        }
    }

  return (
    <div className='input-container'>
        <p>Add Task</p>
        <input onChange={(e) => handleChange(e)} onKeyUp={handleKeyChange} name='input' value={input} placeholder='Drink Water..'></input>
        <button className='btn' onClick={reset}>Refresh</button>
    </div>
  )
}

export default Input