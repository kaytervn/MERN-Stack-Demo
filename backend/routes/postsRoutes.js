import express from "express";
import { addPost, getPosts } from "../controllers/postsController.js";

const router = express.Router();

// Get All Posts
router.get("/", getPosts);

// Create New Post
router.post("/", addPost);

export { router as postsRoutes };
