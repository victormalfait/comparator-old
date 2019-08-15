"use strict";

const { Schema, model } = require("mongoose");
const Promise = require("bluebird");

class Product {
  constructor() {
    const ProductSchema = new Schema(
      {
        name: { type: String, required: true, max: 100 },
        prices: [
          {
            price: Number,
            date: { type: Date, default: Date.now },
            store: { type: Schema.Types.ObjectId, ref: "Store" }
          }
        ]
      },
      {
        versionKey: false
      }
    );
    this.productModel = model("Product", ProductSchema);
  }

  add({ name, price, store }) {
    const product = new this.productModel({
      name: name,
      prices: [{ price: price, store: store }]
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

  update({ id, name, prices }) {
    return new Promise((resolve, reject) => {
      return this.productModel.findOneAndUpdate(
        { _id: id },
        { $set: { name: name, prices: prices } },
        { new: true },
        (err, product) => {
          if (err) reject(err);
          return resolve(product);
        }
      );
    });
  }
}

module.exports = new Product();
