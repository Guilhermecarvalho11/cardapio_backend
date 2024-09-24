const sequelize = require("../database/postgres");
const AppError = require("../utils/AppError");
const modelsUsers = require("../models/modelsUsers");

class AdminControllers {
  async create(req, res) {
    const { email, name, password, role } = req.body;

    const optionsRule = ["admin", "client"];
    const roles = optionsRule.includes("admin");

    try {
      const userAdmin = await modelsUsers.create({
        email,
        name: roles,
        password,
        role: "admin",
      });
      res.status(201).json(userAdmin);
    } catch (error) {
      console.log(error);
      throw new AppError("Admin não cadastrado");
    }
  }
}

module.exports = AdminControllers;
