import express from "express";
import Post from "../models/PostModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { title, body } = req.body;
  await Post.create({ title, body });
  res.end();
});

export { router as postsRoutes };
