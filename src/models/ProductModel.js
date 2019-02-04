'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Promise = require('bluebird');

class Product {

    constructor() {
      const ProductSchema = new Schema({
        name: {type: String, required: true, max: 100},
        price: {type: Number, required: true},
      });
      this.productSchema = mongoose.model('Product', ProductSchema);
    }

    create({name, price}) {
      return new this.productSchema({
        name: name,
        price: price
      });
    }

    findById() {

    }

    findAll() {
      return new Promise((resolve, reject) => {
        return this.productSchema.find({}, (err, products) => {
          if (err) reject(err);
          return resolve(products);
        });
      });

    }

}

module.exports = new Product();