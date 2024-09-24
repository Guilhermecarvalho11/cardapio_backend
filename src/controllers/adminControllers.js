const sequelize = require("../database/postgres");
const AppError = require("../utils/AppError");
const modelsUsers = require("../models/modelsUsers");

class AdminControllers {
  async create(req, res) {
    const { email, name, password } = req.body;

    if (!name) {
      throw new AppError("Nome é obrigatório");
    }

    if (!password || password.length < 6) {
      throw new AppError("A senha deve ter no mínimo 6 caracteres");
    }

    const hashedPassword = await hash(password, 8);

    const userRole = "admin";

    try {
      const userAdmin = await modelsUsers.create({
        email,
        name,
        password: hashedPassword,
        role: userRole,
      });
      res.status(201).json(userAdmin);
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        throw new AppError("Email já cadastrado");
      }
      console.log(error);
      throw new AppError("Admin não cadastrado");
    }
  }
}

module.exports = AdminControllers;
