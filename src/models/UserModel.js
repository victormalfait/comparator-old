"use strict";

const { Schema, model } = require("mongoose");
const Promise = require("bluebird");
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const config = require('../config/config');
const privateKey = fs.readFileSync(__dirname + '/../config/private.key', 'utf-8');
const publicKey = fs.readFileSync(__dirname + '/../config/public.key', 'utf-8');

class UserModel {

  constructor() {
    const UserSchema = new Schema({
    	email: {
    		type: String,
    		lowercase: true,
    		trim: true,
    		unique: true,
    		required: true
    	},
    	password: {
        type: String,
        required: true
      }
    },{
      timestamps: {
        createdAt: 'created_at'
      }
    });
    this.userModel = model("User", UserSchema);
  }

  add({email, password}) {
    const user = new this.userModel({
      email: email,
      password: passwordHash.generate(password)
    });
    return new Promise((resolve, reject) => {
      return user.save((err, user) => {
        if (err) reject(err);
        return resolve(user);
      });
    });
  }

  findByEmail(email) {
    return new Promise((resolve, reject) => {
      return this.userModel.findOne({
        email: email
      }, ((err, user) => {
        if (err) return reject(err);
        return resolve(user);
      }));
    });
  }

  findAll() {
    return new Promise((resolve, reject) => {
      return this.userModel.findAll({}, (err, users) => {
        if (err) reject(err);
        return resolve(users);
      })
    });
  }

  authenticate(email, password) {
    return this.findByEmail(email)
      .then((user) => {
        console.log(passwordHash.verify(password, user.password));
        return passwordHash.verify(password, user.password);
      })
      .catch(err => {
        return err;
      });
	}

  getToken(email, password) {
    const payload = {
      email: email,
      password: password
    }
    const options = {
      expiresIn: "6h"
    }
    return jwt.sign(payload, privateKey, options);
  }
}

module.exports = new UserModel();
