const AppError = require("../utils/AppError");

class UserControllers {
  create(req, res) {
    const { email, name, password } = req.body;

    if (!name) {
      throw new AppError("nome é obrigatorio");
    }
    res.status(201).json({ email, name, password });
  }
}

module.exports = UserControllers;
