
import './App.css'
import Logo from './Logo.js'
import ToDoList from './ToDoList.js'
import Input from './Input.js'
import Task from './Task.js'
import { useState } from 'react'

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, task])
  }

  function handleToggle(id) {
    setTasks((tasks) => 
      tasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task))
  }

  function handleDelete(id) {
    setTasks((tasks) => tasks.filter(task => task.id !== id))
  }


  return (
    <div className="app">
      <Logo />
      <Input onAddTask={addTask}/>
      <ToDoList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete}/>
    </div>
  )
}


