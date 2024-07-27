import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Guide() {
    const [tasks, setTasks] = useState([
        { id: 1, task: 'Take a bath', time: 15, completed: false },
        { id: 2, task: 'Boil 4 eggs', time: 17, completed: false },
        // Add more tasks here
    ]);
    const handleToggleComplete = (id) => {
        setTasks(
            tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };
    
    const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Today's Tasks</h1>
            <ul>
            {tasks.map((task) => (
                <li key={task.id} className="flex items-center mb-2">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleComplete(task.id)}   

                    className="mr-2"
                />
                <span className={task.completed ? 'line-through' : ''}>{task.task}</span>   

                <span className="ml-auto">{task.time} mins</span>
                <button className="ml-2">Edit</button>
                </li>
            ))}
            </ul>
            {/* Add a form here to add new tasks */}
        </div>
        
    );
}