import { useState } from "react";
import "./App.css";

const timeHours = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

export default function Input({ onAddTask }) {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  
  ///////////////////////

  function handleSubmit(event) {
    event.preventDefault();

    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;

    const newTask = {
      description,
      day,
      month,
      time,
      completed: false,
      id: crypto.randomUUID(),
    };
    onAddTask(newTask);
    setDescription("");
    console.log(newTask);
  }

  ////////////////////////
  return (
    <form onSubmit={handleSubmit}>
      <h3>What do you need to do? 🚀</h3>
      <select value={time} onChange={(e) => setTime(e.target.value)}>
        {timeHours.map((hour) => (
          <option value={hour} key={hour}>
            {hour}
          </option>
        ))}
      </select>
      <input
        required
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="my task..."
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add task</button>
    </form>
  );
}
