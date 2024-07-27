import React, { useState } from "react";
import axios from "axios";

export default function Dasboard() {
  const [task, setTask] = useState("");
  const [duration, setDuration] = useState(0);

  const handleSubmit = () => {
    axios
      .post("http://127.0.0.1:5000/predict", {
        duration: duration,
        task_type: task,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input placeholder="Task name" type="text" onChange={(e) => setTask(e.target.value)} />
      <input placeholder="duration" type="text" onChange={(e) => setDuration(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
