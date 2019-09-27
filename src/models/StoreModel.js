"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Promise = require("bluebird");

class StoreModel {
  constructor() {
    const StoreSchema = new Schema({
      name: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      zip_code: { type: Number, required: true },
      localisation: {
        lat: { type: Number },
        lng: { type: Number }
      }
    });
    this.storeModel = mongoose.model("Store", StoreSchema);
  }

  add({ name, address, city, zip_code, lat, lng }) {
    const store = new this.storeModel({
      name: name,
      address: address,
      city: city,
      zip_code: zip_code,
      localisation: {
        lat: lat,
        lng: lng
      }
    });
    return new Promise((resolve, reject) => {
      return store.save((err, store) => {
        if (err) reject(err);
        return resolve(store);
      });
    });
  }

  findById(idStore) {
    return new Promise((resolve, reject) => {
      return this.storeModel.findById(idStore, (err, store) => {
        if (err) reject(err);
        return resolve(store);
      });
    });
  }

  findAll() {
    return new Promise((resolve, reject) => {
      return this.storeModel.find({}, (err, stores) => {
        if (err) reject(err);
        return resolve(stores);
      });
    });
  }

  update({ id, name, address, city, zip_code, lat, lng }) {
    return new Promise((resolve, reject) => {
      return this.storeModel.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            name: name,
            address: address,
            city: city,
            zip_code: zip_code,
            localisation: { lat: lat, lng: lng }
          }
        },
        { new: true },
        (err, store) => {
          if (err) reject(err);
          return resolve(store);
        }
      );
    });
  }
}

module.exports = new StoreModel();
