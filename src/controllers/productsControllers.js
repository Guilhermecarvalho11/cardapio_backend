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

  async update(req, res) {
    const { name, category, ingredients, price, description } = req.body;
    const { id } = req.params;
    try {
      const productsUpdate = await modelProducts.findByPk(id);

      await productsUpdate.update({
        name: name,
        category: category,
        ingredients: ingredients,
        price: price,
        description: description,
      });
      res.status(201).json(productsUpdate);
    } catch (error) {
      console.log("o erro foi: ", error);
      throw new AppError("Produto não atualizado");
    }
  }
}

module.exports = Products;
