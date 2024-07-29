const { Router } = require("express");

const userRoutes = require("./users.routes");
const adminRoutes = require("./admin.routes");

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/admin", adminRoutes);

module.exports = routes;
