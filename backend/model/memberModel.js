const mongoose = require("mongoose");

const memberSchema = mongoose.Schema({
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
  },
  sharecode : {
    type : Number,
    required: true,
  }
});

const memberModel = mongoose.model("Member", memberSchema);
module.exports = {
    memberModel
}
