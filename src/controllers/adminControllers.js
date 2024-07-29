class AdminControllers {
  create(req, res) {
    const { email, name, password } = req.body;

    res.status(201).json({ email, name, password });
  }
}

module.exports = AdminControllers;
