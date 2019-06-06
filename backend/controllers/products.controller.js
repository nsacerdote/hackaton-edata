const Product = require('../models/product.model');

module.exports.postProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.sendStatus(201);
};

module.exports.getProducts = (req, res) => {
  Product.fetchAll().then(
    products => res.status(200).json(products)
  );
};
