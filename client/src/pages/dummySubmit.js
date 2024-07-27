import React, { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [task, setTask] = useState("");
  const [duration, setDuration] = useState(0);

  const handleSubmit = async () => {
    try {
      // First, make a POST request to the Flask server
      const predictionResponse = await axios.post(
        "http://127.0.0.1:5000/predict",
        {
          duration: duration,
          task_type: task,
        }
      );

      // Extract water usage from the response
      const { water_usage } = predictionResponse.data;

      // Prepare data for the second request
      const data = {
        task: task,
        duration: duration,
        waterUsage: water_usage.toFixed(2),
      };

      // Make a POST request to the second server
      const todoResponse = await axios.post(
        "http://localhost:8080/api/todo",
        data
      );
      console.log(todoResponse.data); // Log the response data
    } catch (error) {
      // Log error details
      console.error("An error occurred:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Status:", error.response.status);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  return (
    <div>
      <input
        placeholder="Task name"
        type="text"
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        placeholder="Duration"
        type="number"
        onChange={(e) => setDuration(Number(e.target.value))}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
