import { Todo } from "../models/todoModel.js";

// Create todo
export const createTodo = async (req, res) => {
  try {
    if (!req.body.task) {
      return res.status(400).send({ message: "Task field is required" });
    }

    const task = {
      task: req.body.task,
      duration: req.body.duration,
      waterUsage: req.body.waterUsage,
      done: req.body.done,
    };

    const result = await Todo.create(task);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// Fetch all todo data
export const fetchAllTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).send(todos);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// Fetch single todo by id
export const fetchSingleTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todo.findById(id);
    if (!result) {
      return res.status(404).send("Task is not found!");
    }
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// Edit Todo
export const editTodo = async (req, res) => {
  try {
    if (!req.body.task) {
      return res.status(400).send({ message: "Task field is required" });
    }
    const { id } = req.params;
    const todo = await Todo.findByIdAndUpdate(id, req.body);

    if (!todo) {
      return res.status(404).send({ message: "No task found" });
    }

    return res.status(200).send({ message: "Todo Successfully Updated" });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const editStatusTodo = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the todo item by id
    const todoItem = await Todo.findById(id);

    if (!todoItem) {
      return res.status(404).send("Todo does not exist");
    }

    // Toggle the 'done' status
    todoItem.done = !todoItem.done;

    // Save the updated todo item
    const result = await todoItem.save();

    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send("An error occurred");
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todo.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).send("Todo does not exist");
    }

    return res.status(200).send("Todo deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send("An error occurred");
  }
};
