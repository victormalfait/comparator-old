'use strict';

const ProductModel = require('../models/ProductModel');

class ProductController {
  index(req, res) {
    const products = [{
      name: "nom 1"
    }, {
      name: "nom2"
    }];
    res.render('../src/views/product/product.ejs', {products: products});
  }

  detail(req, res) {
    const product = {};
    console.log(req.params);
    res.render('../src/views/product/detail.ejs', product);
  }

  add(req, res, next) {
    const productModel = new ProductModel();
    const productModelObject = productModel.create({
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
