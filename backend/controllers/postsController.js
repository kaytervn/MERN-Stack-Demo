import Post from "../models/PostModel.js";

const getPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json({ post });
  } catch (error) {
    return res.status(500).json({ error: error.msg });
  }
};

const addPost = async (req, res) => {
  const { title, body } = req.body;
  if (!title || !body) {
    return res.status(400).json({ error: "All field are required" });
  }
  try {
    const post = await Post.create({ title, body });
    res.status(200).json({ msg: "Post created", post });
  } catch (error) {
    return res.status(500).json({ error: error.msg });
  }
};

export { getPosts, addPost };
