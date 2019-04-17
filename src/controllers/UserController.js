"use strict";
const UserModel = require('../models/UserModel');
const passwordHash = require("password-hash");

class UserController {
  getUsers(req, res, next) {
    return;
  }

  getUser(req, res, next) {
    return;
  }
  
  signup(req, res, next) {
    if (!req.body.email || !req.body.password) {
      res.status(400).json({
        "text": "Invalid request"
      })
    } else {
      const user = {
        email: req.body.email,
        password: passwordHash.generate(req.body.password)
      }
      return UserModel.findByEmail(user.email).then((user) => {
        if (user) {
          res.status(204).json({
            "text": "L'adresse email existe déjà"
          });
        } else {
          return UserModel.add(user);
        }
      }).then((user) => {
        res.status(200).json({
          "text": "Succès",
          "token": user.getToken()
        })
      }).catch((err) => {
        res.status(500).json({
          "text": "Erreur interne"
        })
      });
    }
  }

  login(req, res, next) {
    if (!req.body.email || !req.body.password) {
      res.status(400).json({
        "text": "Requête invalide"
      })
    } else {
      return User.findByEmail(req.body.email)
      .then((user) => {
        if(!user){
          res.status(401).json({
            "text": "L'utilisateur n'existe pas"
          })
        }
        if (User.authenticate(req.body.password)) {
          res.status(200).json({
            "token": User.getToken(),
            "text": "Authentification réussi"
          })
        } else {
          res.status(401).json({
            "text": "Mot de passe incorrect"
          })
        }
      });
    }
  }
}

module.exports = new UserController();
