import { User } from "../models/userModel.js";

// Login to user
export const loginUser = async (req, res) => {
  res.json({ message: "Login used" });
};

// Sign up user
export const signupUser = async (req, res) => {
  res.json({ message: "Signup user" });
};
