import express from "express";
import { loginUser, signupUser } from "../controllers/userController.js";

const router = express();

// Login Route
router.post("/login", loginUser);

// SignIn Route
router.post("/signup", signupUser);

export default router;
