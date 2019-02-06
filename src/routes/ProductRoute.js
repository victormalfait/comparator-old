"use strict";
const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");

router.get("/", productController.index);
router.get("/:idProduct", productController.detail);
router.post("/add", productController.add);
//TODO voir pour passer en PUT
router.post("/addPrice/:idProduct", productController.addPrice);

module.exports = router;