const { Router } = require("express");

const UserControllers = require("../controllers/userControllers");
const myMiddleware = require("../middlewere/authenticated");

const userRoutes = Router();

const userControllers = new UserControllers();

userRoutes.post("/", myMiddleware, userControllers.create);
userRoutes.put("/:id", myMiddleware, userControllers.update);

module.exports = userRoutes;
