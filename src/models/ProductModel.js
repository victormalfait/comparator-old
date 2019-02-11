"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Promise = require("bluebird");

class Product {

  constructor() {
    const ProductSchema = new Schema({
      name: {type: String, required: true, max: 100},
      prices: [{price: Number, date:{ type: Date, default: Date.now}}],
    }, {
      versionKey: false
    });
    this.productModel = mongoose.model("Product", ProductSchema);
  }

  add({name, price}) {
    const product = new this.productSchema({
      name: name,
      prices: [{price: price}]
    });
    return new Promise((resolve, reject) => {
      return product.save((err, product) => {
        if (err) reject(err);
        return resolve(product);
      });
    });
  }

  findById(idProduct) {
    return new Promise((resolve, reject) => {
      return this.productModel.findById(idProduct, (err, product) => {
        if (err) reject(err);
        return resolve(product);
      });
    });
  }

  findAll() {
    return new Promise((resolve, reject) => {
      return this.productModel.find({}, (err, products) => {
        if (err) reject(err);
        return resolve(products);
      });
    });
  }

  update({id, name, prices}) {
    return new Promise((resolve, reject) => {
      return this.productModel.findOneAndUpdate(
        {_id: id},
        {$set: {name: name, prices: prices}},
        {new: true},
        (err, product) => {
          if (err) reject(err);
          return resolve(product);
        });
    });
  }
}

module.exports = new Product();