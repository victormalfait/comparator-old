"use strict";
const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");
const basicAuth = require('../helpers/basic-auth');

router.get("/", productController.getProudcts);
router.get("/:idProduct", productController.getProudct);
router.post("/", basicAuth, productController.postProduct);
router.put("/:idProduct", basicAuth, productController.updateProduct);

module.exports = router;
