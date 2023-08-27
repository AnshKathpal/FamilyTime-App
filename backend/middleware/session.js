const session = require("express-session");

const sessionMiddleware = session({
  secret: "anshkathpal",
  resave: false,
  saveUninitialized: true
});

module.exports = sessionMiddleware;