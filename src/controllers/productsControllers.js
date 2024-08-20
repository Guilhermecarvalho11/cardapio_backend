const AppError = require("../utils/AppError");
const modelProducts = require("../models/modelProducts");

class Products {
  async index(req, res) {
    try {
      const products = await modelProducts.findAll();
      return res.status(200).json(products);
    } catch (erro) {
      console.log(erro);
      throw new AppError("Erro ao listar produtos", 401);
    }
  }

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

  async delete(req, res) {
    const { id } = req.params;

    try {
      const deleteProducts = await modelProducts.findByPk(id);
      if (!deleteProducts) {
        throw new AppError("Produto não encontrado", 404);
      }
      await deleteProducts.destroy();
      console.log("Produto deletado com sucesso!");
      res.status(200).json(deleteProducts);
    } catch (error) {
      console.log(error);
      throw new AppError("Produto não deletado");
    }
  }
}

module.exports = Products;
