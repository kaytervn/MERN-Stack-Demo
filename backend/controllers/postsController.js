import mongoose from "mongoose";
import Post from "../models/PostModel.js";
import User from "../models/UserModel.js";

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createAt: "desc" });
    res.status(200).json({ posts });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUserPosts = async (req, res) => {
  const user = await User.findById(req.user._id);

  try {
    const post = await Post.find({ user: user._id }).sort({ createAt: "desc" });
    res.status(200).json({ post });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const addPost = async (req, res) => {
  const { title, body } = req.body;
  if (!title || !body) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const user = await User.findById(req.user._id);

  try {
    const post = await Post.create({ user: user._id, title, body });
    res.status(200).json({ message: "Post created", post });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deletePost = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "Incorrect ID" });
  }

  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.status(400).json({ error: "Post Not Found" });
  }
  const user = await User.findById(req.user._id);
  if (!post.user.equals(user._id)) {
    return res.status(401).json({ error: "Not authorized" });
  }
  try {
    await post.deleteOne();
    return res.status(200).json({ success: "Post Was Deleted" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updatePost = async (req, res) => {
  const { title, body } = req.body;
  if (!title || !body) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "Incorrect ID" });
  }

  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.status(400).json({ error: "Post Not Found" });
  }
  const user = await User.findById(req.user._id);
  if (!post.user.equals(user._id)) {
    return res.status(401).json({ error: "Not authorized" });
  }
  try {
    await post.updateOne({ title, body });
    return res.status(200).json({ success: "Post Was Updated" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { getPosts, getUserPosts, addPost, deletePost, updatePost };
