"use strict";

const ProductModel = require("../models/ProductModel");

class ProductController {
  getProudcts(req, res, next) {
    ProductModel.findAll()
      .then((products) => {
        res.status(200).json({products: products});
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  getProudct(req, res, next) {
    ProductModel.findById(req.params.idProduct)
      .then((product) => {
        res.status(200).json({product: product});
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  postProduct(req, res, next) {
    ProductModel.add({name: req.body.name, price: req.body.price})
      .then((product) => {
        res.status(200).json({product: product});
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  updateProduct(req, res, next) {
    ProductModel.findById(req.params.idProduct).then((product) => {
      product.prices.push({price: req.body.price});
      ProductModel.update({
        id: product.id,
        name: product.name,
        prices: product.prices
      })
        .then(() => {
          res.status(200).json({product: product});
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    });

  }
}

module.exports = new ProductController();
