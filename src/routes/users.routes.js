const { Router } = require("express");
const ProductsControllers = require("../controllers/productsControllers");

const UserControllers = require("../controllers/userControllers");
const ensureAuthenticated = require("../middlewere/authenticated");

const userRoutes = Router();

const userControllers = new UserControllers();
const productsControllers = new ProductsControllers();

userRoutes.get("/products", productsControllers.index);
userRoutes.post("/", userControllers.create);
userRoutes.put("/", ensureAuthenticated, userControllers.update);

module.exports = userRoutes;
