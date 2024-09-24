const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");
const modelUser = require("../models/modelsUsers.js");
const sequelizeConnection = require("../database/postgres/index");

class UserControllers {
  async create(req, res) {
    const { email, name, password } = req.body;

    if (!name) {
      throw new AppError("nome é obrigatorio");
    }

    if (!password || password.length < 6) {
      throw new AppError("A senha deve ter no mínimo 6 caracteres");
    }

    const hashedPassword = await hash(password, 8);

    const userRole = name.toLowerCase() === "admin" ? "admin" : "client";

    try {
      const user = await modelUser.create({
        email,
        name,
        password: hashedPassword,
        role: userRole,
      });
      return res.status(201).json(user);
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        throw new AppError("Email já cadastrado");
      }
      console.error(error);
      throw new AppError("Usuário não cadastrado", error);
    }
  }

  async update(req, res) {
    const { email, name, password } = req.body;
    const user_id = req.user.id;

    if (!name && !email) {
      throw new AppError("nenhum campo fornecido");
    }

    try {
      const user = await modelUser.findByPk(user_id);

      if (!user) {
        throw new AppError("usuário não encontrado", 401);
      }

      await user.update({
        name: name,
      });

      return res.status(200).json(user);
    } catch (error) {
      throw new AppError("erro ao atualizar o usuario", 500);
    }
  }
}

module.exports = UserControllers;
