const { Router } = require("express");
const AdminControllers = require("../controllers/adminControllers");

const adminRoutes = Router();

function myMiddleware(rew, res, next) {
  console.log("middleware admin");
  next();
}

const adminControllers = new AdminControllers();

adminRoutes.post("/", myMiddleware, adminControllers.create);

module.exports = adminRoutes;
