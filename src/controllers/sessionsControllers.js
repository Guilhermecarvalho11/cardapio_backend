const AppError = require("../utils/AppError");
const modelUser = require("../models/modelsUsers.js");
const authConfig = require("../config/jwtConfig.js");
const { sign } = require("jsonwebtoken");
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

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn,
    });

    return res.status(201).json({ user: user, token });
  }
}

module.exports = SessionsControllers;
