"use strict";

const StoreModel = require("../models/StoreModel");

class StoreController {
  getStores(req, res, next) {
    StoreModel.findAll()
      .then((Stores) => {
        res.status(200);
        res.json({Stores: Stores});
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  getStore(req, res, next) {
    StoreModel.findById(req.params.idStore)
      .then((Store) => {
        res.status(200).json({Store: Store});
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  postStore(req, res, next) {
    StoreModel.add({name: req.body.name, address: req.body.address})
      .then((Store) => {
        res.status(200).json({Store: Store});
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  updateStore(req, res, next) {
    StoreModel.findById(req.params.idStore).then((Store) => {
      Store.prices.push({address: req.body.address});
      StoreModel.update({
        id: Store.id,
        name: Store.name,
        prices: Store.address
      })
        .then(() => {
          res.status(200).json({Store: Store});
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    });

  }
}

module.exports = new StoreController();
