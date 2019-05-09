"use strict";
const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

router.get("/", userController.getUsers);
router.get("/:idUser", userController.getUser);
router.post("/signup", userController.addUser);
router.put("/:idUser", userController.updateUser);

module.exports = router;
