"use strict";

const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");
const config = require("../config/config");

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
    UserModel.findById({ id: req.param.id });
  }

  addUser(req, res, next) {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({
        text: "Invalid request"
      });
    } else {
      const newUser = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        firstname: req.body.firstname,
        age: req.body.age
      };
      return UserModel.findByEmail(newUser.email)
        .then(user => {
          if (user) {
            return res.status(409).json({
              text: "L'adresse email existe déjà"
            });
          } else {
            return UserModel.add(newUser);
          }
        })
        .then(user => {
          return res.status(200).json({
            text: "Succès"
          });
        })
        .catch(err => {
          return res.status(500).json({
            text: "Erreur interne: " + err
          });
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
        text: "Requête invalide"
      });
    } else {
      return UserModel.authenticate(req.body.email, req.body.password)
        .then(({ user, isMatch }) => {
          if (isMatch) {
            const payload = {
              id: user.id,
              name: user.name
            };
            return jwt.sign(
              payload,
              config.secret,
              {
                expiresIn: 86400 // 1 day in seconds
              },
              (err, token) => {
                res.status(200).json({
                  success: true,
                  token: "Bearer " + token
                });
              }
            );
          } else {
            res.status(403).json({
              success: false,
              message: "Password incorrect"
            });
          }
        })
        .catch(err => {
          res.status(401).json({
            text: "Mot de passe incorrect " + err
          });
        });
    }
  }
}

module.exports = new UserController();
