const { Router } = require("express");

const UserControllers = require("../controllers/userControllers");
const ensureAuthenticated = require("../middlewere/authenticated");

const userRoutes = Router();

const userControllers = new UserControllers();

userRoutes.post("/", userControllers.create);
userRoutes.put("/", ensureAuthenticated, userControllers.update);

module.exports = userRoutes;
