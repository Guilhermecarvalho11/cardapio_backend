const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");
const modelUser = require("../models/modelsUsers.js");
const sequelizeConnection = require("../database/mySQL/index");

class UserControllers {
  async create(req, res) {
    const { email, name, password } = req.body;

    if (!name) {
      throw new AppError("nome é obrigatorio");
    }

    if (req.body.password.length < 6) {
      throw new AppError("Digite uma senha maior que 6 caracteres");
    }

    const role = name.toLowerCase().includes("admin") ? "admin" : "client";
    const hashedPassword = await hash(password, 8);

    try {
      const user = await modelUser.create({
        email,
        name,
        password: hashedPassword,
        role,
      });
      return res.status(201).json(user);
    } catch (error) {
      console.error(error);
      throw new AppError("Usuário não cadastrado");
    }
  }

  async update(req, res) {
    const { email, name, password } = req.body;
    const { id } = req.params;

    if (!name && !email) {
      throw new AppError("nenhum campo fornecido");
    }

    try {
      const user = await modelUser.findByPk(id);

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
