// controllers/productController.js
const Product = require('../models/productModel');

const products = [];
//create
const createProduct = (req, res) => {
  const { name, price } = req.body;
  const newProduct = new Product(products.length + 1, name, price);
  products.push(newProduct);
  res.status(201).json(newProduct);
};
//read
const getProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(prod => prod.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
};
//update
const updateProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex(prod => prod.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const { name, price } = req.body;
  products[productIndex].name = name;
  products[productIndex].price = price;

  res.json(products[productIndex]);
};
//delete
const deleteProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex(prod => prod.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const deletedProduct = products.splice(productIndex, 1)[0];
  res.json(deletedProduct);
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
