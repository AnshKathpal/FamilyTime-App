const express = require("express");
const postRoute = express.Router();
const Post = require("../model/postModel");
const User = require("../model/headModel");

postRoute.post("/addposts", async (req, res) => {
  try {
    const { upload, caption } = req.body;

    const post = new Post({
      username: req.username,
      upload,
      caption,
      creator: req.userId,
    });
    await post.save();
    return res.status(200).send(post);
  } catch (error) {
    console.log(error.message);
    return res.status(400).end(error.message);
  }
});

postRoute.get("/headposts", async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).send(post);
  } catch (error) {
    console.log(error.message);
    return res.status(400).end(error.message);
  }
});

module.exports = {
  postRoute,
};
