const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  username: {
    type: "String",
  },
  upload: {
    type: "String",
  },
  caption: {
    type: "String",
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  likes: {
    type: [String],
    default: [],
  },
  comments: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model("Post", postSchema);
