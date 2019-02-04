'use strict';

const ProductModel = require('../models/ProductModel');

class ProductController {
  index(req, res, next) {
    ProductModel.findAll()
      .then((products) => {
        res.render('../src/views/product/product.ejs', {products: products});
    }).catch((err) => {
        return next(err);
    });
  }

  detail(req, res) {
    const product = {};
    res.render('../src/views/product/detail.ejs', product);
  }

  add(req, res, next) {
    const productModelObject = ProductModel.create({
      name: req.body.name,
      price: req.body.price
    });
    productModelObject.save((err) => {
      if (err) {
        return next(err);
      }
      res.send('Product Created successfully');
    });
  }
}

module.exports = new ProductController();
