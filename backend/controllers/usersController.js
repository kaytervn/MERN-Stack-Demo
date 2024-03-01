import mongoose from "mongoose";
import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config.js";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "10d" });
};

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ error: "Email is already taken" });
  }

  const salt = await bcrypt.genSalt();
  const hashed = await bcrypt.hash(password, salt);

  try {
    const user = await User.create({ email, password: hashed });
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: "Incorrect Email" });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({ error: "Incorrect Password" });
  }

  try {
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { registerUser, loginUser };
