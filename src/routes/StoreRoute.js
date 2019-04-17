"use strict";

const express = require("express");
const router = express.Router();
const storeController = require("../controllers/StoreController");

router.get("/", storeController.getUsers);
router.get("/:idStore", storeController.getUser);
router.post("/", storeController.postUser);
router.put("/:idStore", storeController.updateUser);

module.exports = router;
