const mongoose = require("mongoose");

const headSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const headModel = mongoose.model("Head", headSchema);
module.exports = {
    headModel
}
