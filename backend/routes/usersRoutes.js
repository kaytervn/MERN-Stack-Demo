import express from "express";
import { registerUser, loginUser } from "../controllers/usersController.js";

const router = express.Router();

router.post("/", registerUser);

router.post("/login", loginUser);

export { router as usersRoutes };
