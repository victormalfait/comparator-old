"use strict";
const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");
const passport = require("passport");

router.get("/", productController.getProudcts);
router.get("/:idProduct", productController.getProudct);
router.post(
  "/",
  //passport.authenticate("jwt", { session: false }),
  productController.postProduct
);
router.put(
  "/:idProduct",
  passport.authenticate("jwt", { session: false }),
  productController.updateProduct
);

module.exports = router;
