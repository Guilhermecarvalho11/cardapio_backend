const AppError = require("../utils/AppError");
const modelProducts = require("../models/modelProducts");
const path = require("path");
const fs = require("fs");

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
      const { file } = req;
      console.log("File:", file);
      if (!file) {
        throw new AppError("Imagem é obrigatoria");
      }

      // Gera a URL da imagem diretamente
      const imageURL = path.join("/uploads", file.filename).replace(/\\/g, "/");

      const products = await modelProducts.create({
        image_url: imageURL,
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
        name,
        category,
        ingredients,
        price,
        description,
      });

      if (req.file) {
        const imageFile = req.file;
        const imageUrl = path.join("/uploads", imageFile.filename);

        // Remover imagem
        if (productsUpdate.image_url) {
          const oldImagePath = path.join(
            "/uploads",
            path.basename(productsUpdate.image_url)
          );

          if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath);
          } else {
            console.log(`O arquivo ${oldImagePath} não existe.`);
          }
        }

        await productsUpdate.update({ image_url: imageUrl });
      }
      res.status(201).json(productsUpdate);
    } catch (error) {
      console.log("Erro:", error);
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
