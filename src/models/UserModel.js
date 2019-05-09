"use strict";

const { Schema, model } = require("mongoose");
const Promise = require("bluebird");
const passwordHash = require('password-hash');
const jwt = require('jwt-simple');
const config = require('../config/config');

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
    this.findByEmail(email)
      .then((user) => {
        return user.password === password;
      })
      .catch(err => {
        return false;
      });
	}
}

module.exports = new UserModel();
