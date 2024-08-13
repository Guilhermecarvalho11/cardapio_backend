const AppError = require("../utils/AppError");
const modelUser = require("../models/modelsUsers.js");
const { compare } = require("bcryptjs");

class SessionsControllers {
  async create(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new AppError("Campos não preenchidos", 401);
    }

    const user = await modelUser.findOne({ where: { email: email } });

    const mathedPassword = await compare(password, user.password);

    if (!mathedPassword) {
      throw new AppError("Email ou senha inválida", 401);
    }

    return res.status(201).json({
      message: "Login realizado com sucesso!",
      user: user,
    });
  }
}

module.exports = SessionsControllers;
