import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  task: { type: String, required: true },
  duration: { type: Number },
  waterUsage: { type: Number },
  done: { type: Boolean, required: true, default: false },
});

export const Todo = mongoose.model("Todo", todoSchema);
