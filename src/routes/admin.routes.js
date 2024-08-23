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
adminRoutes.get("/products/:id", productsControllers.index);

adminRoutes.post("/", adminControllers.create);
adminRoutes.post(
  "/products",
  verifyUserAuth("admin"),
  productsControllers.create
);
adminRoutes.put(
  "/products/:id",
  verifyUserAuth("admin"),
  productsControllers.update
);
adminRoutes.delete(
  "/products/:id",
  verifyUserAuth("admin"),
  productsControllers.delete
);

module.exports = adminRoutes;
