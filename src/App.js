import React, { useEffect, useState } from 'react';
import "./App.css"
import Input from './pages/Input';
import Task from './pages/Task';
import localStorage from 'local-storage';

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const reset = () => {
    setTasks([]);
    localStorage.remove('tasks');
    setCompletedTasks([]);
    localStorage.remove('completedTasks')
  }

  useEffect(() => {
    // Load tasks from local storage when the component is mounted
    const storedTasks = localStorage.get('tasks');
    const storedCompletedTasks = localStorage.get('completedTasks');
    
    if (storedTasks) {
      setTasks(storedTasks);
    }

    if (storedCompletedTasks) {
      setCompletedTasks(storedCompletedTasks);
    }
    
  }, []);

  const addTask = (task) => {
    setTasks([task, ...tasks]);
    localStorage.set('tasks', [task, ...tasks]);
  }

  const completeTask = (taskId) => {
    const taskToComplete = tasks.find(task => task.id === taskId.id);

    if (taskToComplete) {
      // Remove task from tasks array
      const updatedTasks = tasks.filter(task => task.id !== taskId.id);
      setTasks(updatedTasks);
      localStorage.set('tasks', updatedTasks);

      // Add task to completedTasks array
      setCompletedTasks([{ ...taskToComplete, completed: true }, ...completedTasks]);
      localStorage.set('completedTasks', [{ ...taskToComplete, completed: true }, ...completedTasks]);
    }
  }

  return (
    <div className='container'>
      <h1>To-Do App</h1>
      <Input addTask={addTask} reset={reset}/>
      {tasks.map(task => (
        <Task task={task} completeTask={completeTask} key={task.id} />
      ))}
      {completedTasks.length !== 0 ? <h2 className='completed-tasks-header'>Completed Tasks: </h2> : null}
      {completedTasks.map(task => (
        <Task task={task} completeTask={completeTask} key={task.id} />
      ))}
    </div>
  );
}

export default App;
