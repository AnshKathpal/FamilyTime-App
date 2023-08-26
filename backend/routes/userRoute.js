const express = require("express");
const userRoute = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../model/userModel");

userRoute.post("/headregister", async (req, res) => {
  const { email, username, fullname, password } = req.body;

  try {
    const userFind = await User.userModel.findOne({ email });
    if (userFind) {
      res.status(400).json({ err: "User Already Exists. Please Login!!" });
    } else {
      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          res.status(400).json({ err: err.message });
        } else {
          const user = new User.userModel({
            email,
            username,
            password: hash,
            fullname,
          });
          await user.save();
          res.status(200).json({ msg: "User Registred" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(401).end(error.message);
  }
});

userRoute.post("/memberregister", async (req, res) => {
  const { email, username, fullname, password, sharecode } = req.body;

  const predefinedCode = "12345";

  try {
    const userFind = await User.userModel.findOne({ email });
  
    if (sharecode != predefinedCode) {
      res.status(400).json({ err: "Code is incorrect" });
    } else {
      if (userFind) {
        res.status(400).json({ err: "User Already Exists. Please Login!!" });
      } else {
        bcrypt.hash(password, 10, async (err, hash) => {
          if (err) {
            res.status(400).json({ err: err.message });
          } else {
            const user = new User.userModel({
              email,
              username,
              password: hash,
              fullname,
              sharecode,
            });
            await user.save();
            res.status(200).json({ msg: "User Registred" });
          }
        });
      }
    }
  } catch (error) {
    console.log(error.message);
    res.status(401).end(error.message);
  }
});

userRoute.post("/headlogin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.userModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          let token = jwt.sign(
            {
              userId: user._id,
            },
            process.env.secretCode,
            { expiresIn: "4d" }
          );
          res.status(200).json({ msg: "Login Successful!", token });
        } else {
          res.status(400).json({ err: "Wrong Creds.!" });
        }
      });
    } else {
      res.status(400).json({ err: "User Doesn't exists. Please SignUp!" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

userRoute.post("/memberlogin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.userModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          let token = jwt.sign(
            {
              userId: user._id,
            },
            process.env.secretCode,
            { expiresIn: "4d" }
          );
          res.status(200).json({ msg: "Login Successful!", token });
        } else {
          res.status(400).json({ err: "Wrong Creds.!" });
        }
      });
    } else {
      res.status(400).json({ err: "User Doesn't exists. Please SignUp!" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = {
  userRoute,
};
