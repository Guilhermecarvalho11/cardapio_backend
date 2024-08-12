const { Router } = require("express");

const userRoutes = require("./users.routes");
const adminRoutes = require("./admin.routes");
const sessionsRoutes = require("./sessions.routes");

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/admin", adminRoutes);
routes.use("/sessions", sessionsRoutes);

module.exports = routes;
