const { Router } = require("express");
const UserControllers = require("../controllers/userControllers");

const userRoutes = Router();

function myMiddleware(rew, res, next) {
  console.log("middleware");
  next();
}

const userControllers = new UserControllers();

userRoutes.post("/", myMiddleware, userControllers.create);

module.exports = userRoutes;
