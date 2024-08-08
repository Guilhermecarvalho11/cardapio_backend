const { Router } = require("express");
const multer = require("multer");
const upLoadConfig = require("../config/upload");
const myMiddleware = require("../middlewere/authenticated");
const ProductsControllers = require("../controllers/productsControllers");
const AdminControllers = require("../controllers/adminControllers");

const adminRoutes = Router();
// const upload = multer(upLoadConfig.MULTER);

const adminControllers = new AdminControllers();
const productsControllers = new ProductsControllers();

adminRoutes.post("/", myMiddleware, adminControllers.create);
adminRoutes.post("/products", myMiddleware, productsControllers.create);

module.exports = adminRoutes;
