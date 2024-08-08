const AppError = require("../utils/AppError");
const modelProducts = require("../models/modelProducts");

class Products {
  async create(req, res) {
    const { name, category, ingredients, price, description } = req.body;
    try {
      const products = await modelProducts.create({
        name,
        category,
        ingredients,
        price,
        description,
      });

      res.status(201).json(products);
    } catch (error) {
      console.log(error);
      throw new AppError("Produtos não cadastrados", 401);
    }
  }
}

module.exports = Products;
