const ProductService = require('../services/productService');

exports.createProduct = async (req, res) => {
  try {
    const { nome, descricao, preco, categoria } = req.body;
    const product = await ProductService.createProduct(nome, descricao, preco, categoria);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const { nome, descricao, preco, categoria } = req.body;
    const updatedProduct = await ProductService.updateProduct(productId, nome, descricao, preco, categoria);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    await ProductService.deleteProduct(productId);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await ProductService.getProductsByCategory(category);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
