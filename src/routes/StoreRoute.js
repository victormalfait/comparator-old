"use strict";

const express = require("express");
const router = express.Router();
const storeController = require("../controllers/StoreController");

router.get("/", storeController.getStores);
router.get("/:idStore", storeController.getStore);
router.post("/", storeController.postStore);
router.put("/:idStore", storeController.updateStore);

module.exports = router;
