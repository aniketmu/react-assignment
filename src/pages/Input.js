import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; //

const Input = ({addTask, reset}) => {
    const [input, setInput] = useState("");// State to manage the input as the user fills in the task

    //Function to update the input state as the user types in
    const handleChange = (e) => {
        setInput(e.target.value)
    };
     //Function to check whether the key pressed by user is the return key and if so, to update the Task state using the addTask function recived as props and clear the input. Used uuid package to generate unique ids. 
    const handleKeyChange = (e) => {
        if(e.key === 'Enter' && input.trim() !== ''){
            addTask({id: uuidv4(), name: input, completed: false});
            setInput("")
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