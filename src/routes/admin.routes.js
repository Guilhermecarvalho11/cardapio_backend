const { Router } = require("express");
const multer = require("multer");
const upLoadConfig = require("../config/upload");
const myMiddleware = require("../middlewere/authenticated");

const AdminControllers = require("../controllers/adminControllers");

const adminRoutes = Router();
const upload = multer(upLoadConfig.MULTER);

const adminControllers = new AdminControllers();

adminRoutes.post("/", myMiddleware, adminControllers.create);
adminRoutes.patch(
  "/image",
  myMiddleware,
  upload.single("image"),
  (req, res) => {
    console.log(req.file.filename);
    res.json("image ok");
  }
);

module.exports = adminRoutes;
