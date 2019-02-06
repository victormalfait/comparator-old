'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Promise = require('bluebird');

class Product {

    constructor() {
      const ProductSchema = new Schema({
        name: {type: String, required: true, max: 100},
        prices: [{price: Number, date:{ type: Date, default: Date.now}}],
      });
      this.productSchema = mongoose.model('Product', ProductSchema);
    }

    create({name, price}) {
      return new this.productSchema({
        name: name,
        prices: [{price: price}]
      });
    }

    findById(idProduct) {
      return new Promise((resolve, reject) => {
        return this.productSchema.findById(idProduct, (err, product) => {
          if (err) reject(err);
          return resolve(product);
        });
      });
    }

    findAll() {
      return new Promise((resolve, reject) => {
        return this.productSchema.find({}, (err, products) => {
          if (err) reject(err);
          return resolve(products);
        });
      });
    }

    update({id, name, price}) {

    }

}

module.exports = new Product();