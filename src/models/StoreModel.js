"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Promise = require("bluebird");

class StoreModel {
  constructor() {
    const StoreSchema = new Schema({
      name: {type: String, required: true},
      address: {type: String, required: true},
      localisation: {
        lat: {type: Number},
        lon: {type: Number}
      }
    });
    this.storeModel = mongoose.model("Store", StoreSchema);
  }

  findById(idStore) {
    return new Promise((resolve, reject) => {
      return this.storeModel.findById(idStore, (err, store) => {
        if (err) reject(err);
        return resolve(store);
      });
    });
  }
}

module.exports = StoreModel;