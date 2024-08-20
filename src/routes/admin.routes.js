const { Router } = require("express");
const multer = require("multer");
const upLoadConfig = require("../config/upload");
const ensureAuthenticated = require("../middlewere/authenticated");
const ProductsControllers = require("../controllers/productsControllers");
const AdminControllers = require("../controllers/adminControllers");
const verifyUserAuth = require("../middlewere/verifyUserAuth");

const adminRoutes = Router();
// const upload = multer(upLoadConfig.MULTER);

const adminControllers = new AdminControllers();
const productsControllers = new ProductsControllers();

adminRoutes.use(ensureAuthenticated);
adminRoutes.use(verifyUserAuth("admin"));

adminRoutes.post("/", adminControllers.create);
adminRoutes.post("/products", productsControllers.create);
adminRoutes.get("/products", productsControllers.index);
adminRoutes.put("/products/:id", productsControllers.update);
adminRoutes.delete("/products/:id", productsControllers.delete);

module.exports = adminRoutes;
