const AppError = require("../utils/AppError");
const modelUser = require("../models/models.users.js");
const sequelizeConnection = require("../database/mySQL/index");

class UserControllers {
  async create(req, res) {
    const { email, name, password } = req.body;

    if (!name) {
      throw new AppError("nome é obrigatorio");
    }
    try {
      const user = await modelUser.create({
        email,
        name,
        password,
        role: "client",
      });
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      throw new AppError("User não cadastrado");
    }
  }

  async update(req, res) {
    const { email, name, password } = req.body;
    const { id } = req.params;

    if (!name) {
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

      res.status(200).json(user);
    } catch (error) {
      throw new AppError("erro ao atualizar o usuario", 500);
    }
  }
}

module.exports = UserControllers;
