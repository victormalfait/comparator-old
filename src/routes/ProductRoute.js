"use strict";
const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");

router.get("/", productController.getProudcts);
router.get("/:idProduct", productController.getProudct);
router.post("/:idProduct", productController.postProduct);
router.put("/:idProduct", productController.updateProduct);

module.exports = router;