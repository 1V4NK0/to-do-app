import { useState } from 'react'
import './App.css'
import Task from './Task.js'

export default function ToDoList({tasks, onDelete, onToggle, onClear}) {
    const [sortBy, setSortBy] = useState('date');
    let sortedTasks = [...tasks].sort((a,b) => {
        switch(sortBy) {
            case 'description':
                return a.description.localeCompare(b.description);
            case 'date':
                const dateA = new Date(a.year, a.month - 1, a.day)
                const dateB = new Date(b.year, b.month - 1, b.day)
                return dateA - dateB;
            case 'completion':
                return a.completed - b.completed;
            default:
                return 0;
        }
    });




return (
    <div className="list">
        <ul>
            {sortedTasks.map((task) => (
                <Task task={task} onDelete={onDelete} key={task.id} onToggle={onToggle}/>
            ))}
        </ul>

        <div className="actions">
            <button onClick={onClear}>Clear list</button>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option value="description">Sort by description</option>
                <option value="date">Sort by date</option>
                <option value="completion">Sort by completion</option>
            </select>
        </div>
    </div>
)
}