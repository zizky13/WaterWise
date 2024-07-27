import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import axios from "axios";

const Task = ({ task, onEdit, onComplete, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.task);
  const [editedTime, setEditedTime] = useState(task.duration);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(task._id, editedText, editedTime);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center justify-between p-2 border-b border-subprimary">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onComplete(task._id)}
          className="mr-2"
        />
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="mr-2 p-1 border border-primary"
            />
            <input
              type="text"
              value={editedTime}
              onChange={(e) => setEditedTime(e.target.value)}
              className="p-1 border  border-primary"
            />
          </>
        ) : (
          <span>
            {task.task} - {task.duration} Mins
          </span>
        )}
      </div>
      <div className="flex justify-evenly">
        <button
          onClick={handleEdit}
          className="p-1 border bg-blue-500 text-white"
        >
          {isEditing ? (
            <AddCircleOutlineIcon className="inputIcons" />
          ) : (
            <DriveFileRenameOutlineIcon className="inputIcons text-white" />
          )}
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="p-1 border bg-red-600 text-white"
        >
          <DeleteIcon className="inputIcons text-white ml-2" />
        </button>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskTime, setNewTaskTime] = useState(0);

  // Fetch tasks from the backend
  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/todo/");
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleEdit = async (id, newText, newTime) => {
    try {
      const predictionResult = await axios.post(
        "http://127.0.0.1:5000/predict",
        {
          duration: newTime,
          task_type: newText,
        }
      );

      const { water_usage } = predictionResult.data;

      console.log(water_usage);

      await axios.put(`http://localhost:8080/api/todo/${id}`, {
        task: newText,
        duration: newTime,
        waterUsage: water_usage, 
      });

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleComplete = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/todo/status/${id}`);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/todo/${id}`);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTask = async () => {
    if (!newTaskText || !newTaskTime) {
      return; // Prevent adding empty tasks
    }
    try {
      const predictionResult = await axios.post(
        "http://127.0.0.1:5000/predict",
        {
          duration: newTaskTime,
          task_type: newTaskText,
        }
      );

      const { water_usage } = predictionResult.data;

      await axios.post("http://localhost:8080/api/todo/", {
        task: newTaskText,
        duration: newTaskTime,
        waterUsage: water_usage,
      });

      alert("Record added!");
      fetchTasks();
    } catch (e) {
      console.log(e);
    }
    setNewTaskText("");
    setNewTaskTime("");
    handleClose();
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <div className="flex flex-row">
          <h2 className="text-xl mb-2">Today's Tasks</h2>
          <AddCircleOutlineIcon className="inputIcons" onClick={handleShow} />
        </div>
        {tasks
          .filter((task) => !task.done)
          .map((task) => (
            <Task
              key={task._id}
              task={task}
              onEdit={handleEdit}
              onComplete={handleComplete}
              onDelete={handleDelete}
            />
          ))}
      </div>
      <div>
        <h2 className="text-xl mb-2">Completed Tasks Today</h2>
        {tasks.filter((task) => task.done).length === 0 ? (
          <p>
            You haven't completed any tasks yet. Start by selecting a task from
            your list and make progress towards achieving your goals!
          </p>
        ) : (
          tasks
            .filter((task) => task.done)
            .map((task) => (
              <Task
                key={task._id}
                task={task}
                onEdit={handleEdit}
                onComplete={handleComplete}
                onDelete={handleDelete}
              />
            ))
        )}
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Add new task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your activity</Form.Label>
              <Form.Control
                type="text"
                placeholder="input your activity"
                autoFocus
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Duration</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newTaskTime}
                onChange={(e) => setNewTaskTime(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;
