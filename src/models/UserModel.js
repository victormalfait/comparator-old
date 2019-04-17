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
      password: password
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
        if (err) reject(err);
        return resolve(user);
      }));
    });
  }

  authenticate(password) {
		return passwordHash.verify(password, this.password);
	}

  getToken() {
		return jwt.encode(this, config.secret);
	}
}

module.exports = new UserModel();
