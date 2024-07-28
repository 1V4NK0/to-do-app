import "./App.css";

export default function Task({ task, onDelete, onToggle }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onToggle(task.id)} />
      <span style={task.completed ? { textDecoration: "line-through" } : {}}>
        {task.description} on {task.day < 10 ? `0${task.day}` : task.day}/
        {task.month < 10 ? `0${task.month}` : task.month} at {task.time}
      </span>

      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        ❌
      </button>
    </li>
  );
}
