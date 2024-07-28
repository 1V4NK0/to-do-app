import './App.css'
import Task from './Task.js'

export default function ToDoList({tasks, onDelete, onToggle, onClearList}) {
return (
    <div className="list">
        <ul>
            {tasks.map((task) => (
                <Task task={task} onDelete={onDelete} key={task.id} onToggle={onToggle}/>
            ))}
        </ul>
    </div>
)
}