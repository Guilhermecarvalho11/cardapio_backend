const { Router } = require("express");
const UserControllers = require("../controllers/userControllers");

const userRoutes = Router();

function myMiddleware(err, req, res, next) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
    next();
  }
}

const userControllers = new UserControllers();

userRoutes.post("/", myMiddleware, userControllers.create);

module.exports = userRoutes;
