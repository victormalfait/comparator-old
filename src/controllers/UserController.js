"use strict";
const UserModel = require('../models/UserModel');
const passwordHash = require("password-hash");

class UserController {
  getUsers(req, res, next) {
    UserModel.findAll()
      .then(users => {
        res.status(200).json({ users: users });
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  getUser(req, res, next) {
    UserModel.findById({id: req.param.id});
  }

  addUser(req, res, next) {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({
        "text": "Invalid request"
      })
    } else {
      const newUser = {
        email: req.body.email,
        password: passwordHash.generate(req.body.password)
      }
      return UserModel.findByEmail(newUser.email).then((user) => {
        if (user) {
          return res.status(204).json({
            "text": "L'adresse email existe déjà"
          });
        } else {
          return UserModel.add(newUser);
        }
      }).then((user) => {
        return res.status(200).json({
          "text": "Succès",
          "token": UserModel.getToken()
        })
      }).catch((err) => {
        return res.status(500).json({
          "text": "Erreur interne"
        })
      });
    }
  }

  updateUser(req, res, next) {
    return;
  }

  deleteUser(req, res, next) {
    return;
  }

  login(req, res, next) {
    if (!req.body.email || !req.body.password) {
      res.status(400).json({
        "text": "Requête invalide"
      });
    } else {
      return UserModel.authenticate(req.body.email, req.body.password)
        .then(() => {
          res.status(200).json({
            "token": User.getToken(),
            "text": "Authentification réussi"
          });
        })
        .catch((err) => {
          res.status(401).json({
            "text": "Mot de passe incorrect"
          });
        });
    }
  }
}

module.exports = new UserController();
