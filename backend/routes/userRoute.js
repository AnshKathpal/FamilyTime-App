const express = require("express");
const userRoute = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

const Head = require("../model/headModel");
const Member = require("../model/memberModel");

userRoute.post("/headregister", async (req, res) => {
  const { email, username, fullname, password } = req.body;

  try {
    const userFind = await Head.headModel.findOne({ email });
    if (userFind) {
      res.status(400).json({ err: "User Already Exists. Please Login!!" });
    } else {
      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          res.status(400).json({ err: err.message });
        } else {
          const user = new Head.headModel({
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

  // const sharecodeFromFrontend = req.body.sharecode;
  // const generatedCodeFromCookie = req.cookies.generatedCode;

  // console.log(sharecodeFromFrontend);
  // console.log(generatedCodeFromCookie);

  try {
    // if (sharecodeFromFrontend != generatedCodeFromCookie) {
    //   res.status(400).json({ err: "Code is incorrect" });
    // } else {
      const userFind = await Member.memberModel.findOne({ email });

      if (userFind) {
        res.status(400).json({ err: "User Already Exists. Please Login!!" });
      } else {
        bcrypt.hash(password, 10, async (err, hash) => {
          if (err) {
            res.status(400).json({ err: err.message });
          } else {
            const user = new Member.memberModel({
              email,
              username,
              password: hash,
              fullname,
              sharecode
            });
            await user.save();
            res.status(200).json({ msg: "User Registred" });
          }
        });
      // }
    }
  } catch (error) {
    console.log(error.message);
    res.status(401).end(error.message);
  }
});

userRoute.post("/headlogin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Head.headModel.findOne({ email });
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
    const user = await Member.memberModel.findOne({ email });
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
