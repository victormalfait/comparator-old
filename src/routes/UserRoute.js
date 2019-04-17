"use strict";

const express = require("express");
const router = express.Router();
const userController = require("../controllers/StoreController");

router.get("/", userController.getStores);
router.get("/:idStore", userController.getStore);
router.post("/", userController.postStore);
router.put("/:idStore", userController.updateStore);

module.exports = router;
