import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CheckIcon from '@mui/icons-material/Check';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Task = ({ task, onEdit, onComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [editedTime, setEditedTime] = useState(task.time);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(task.id, editedText, editedTime);
    }
    setIsEditing(!isEditing);
  };
//   const handleOpenEditModal = () => {
//     onOpenEditModal(task); // Pass the task object
//   };

  return (
    <div className="flex items-center justify-between p-2 border-b border-subprimary">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onComplete(task.id)}
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
            {task.text} - {task.time}
          </span>
        )}
      </div>
      <button onClick={handleEdit} className="p-1 border bg-blue-500 text-white">
        {isEditing ? <CheckIcon className='text-screenColor'/> : <DriveFileRenameOutlineIcon className=' text-screenColor'/>}
      </button>
    </div>
  );
};

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Take a bath', time: '15 mins', completed: false },
    { id: 2, text: 'Boil 4 eggs', time: '17 mins', completed: false },
    { id: 3, text: 'Dummy', time: 'xx mins', completed: false },
    { id: 4, text: 'Dummy', time: 'xx mins', completed: false },
    { id: 5, text: 'Dummy', time: 'xx mins', completed: false },
  ]);

  const handleEdit = (id, newText, newTime) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText, time: newTime } : task));
  };

  const handleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newTaskText, setNewTaskText] = useState('');
  const [newTaskTime, setNewTaskTime] = useState('');

  const handleAddTask = () => {
    if (!newTaskText || !newTaskTime) {
      return; // Prevent adding empty tasks
    }
    setTasks([...tasks, { id: tasks.length + 1, text: newTaskText, time: newTaskTime, completed: false }]);
    setNewTaskText('');
    setNewTaskTime('');
    handleClose();
  };

  return (
    <div className="p-4">
        <div className="mb-4">
            <div className='flex flex-row'>
                <h2 className="text-xl mb-2 font-bungeer text-primary">Today's Tasks</h2>
                <AddCircleIcon className='text-primary ml-5' onClick={handleShow}/>
            </div>
            {tasks.filter(task => !task.completed).map(task => (
                <Task key={task.id} task={task} onEdit={handleEdit} onComplete={handleComplete} />
            ))}
        </div>
        <div>
            <h2 className="font-bungeer text-primary text-xl mb-2">Completed Tasks Today</h2>
            {tasks.filter(task => task.completed).length === 0 ? (
            <p className='font-sansar text-subprimary text-center'>You haven't completed any tasks yet. Start by selecting a task from your list and make progress towards achieving your goals!</p>
            ) : (
            tasks.filter(task => task.completed).map(task => (
                <Task key={task.id} task={task} onEdit={handleEdit} onComplete={handleComplete} />
            ))
            )}
        </div>
        <div>
            
        </div>
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header>
                <Modal.Title className='font-bungeer text-primary'>Add new task</Modal.Title>
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
                    <Form.Control as="textarea" rows={3} value={newTaskTime} onChange={(e) => setNewTaskTime(e.target.value)}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='danger' onClick={handleClose}>
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
