import express from "express";
import {
  createTodo,
  deleteTodo,
  editStatusTodo,
  editTodo,
  fetchAllTodo,
  fetchSingleTodo,
} from "../controllers/todoController.js";

const router = express.Router();

router.post("/", createTodo);
router.get("/", fetchAllTodo);
router.put("/status/:id", editStatusTodo);
router.get("/:id", fetchSingleTodo);
router.delete("/:id", deleteTodo);
router.put("/:id", editTodo);

export default router;
