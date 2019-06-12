"use strict";

const { Schema, model } = require("mongoose");
const Promise = require("bluebird");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const privateKey = fs.readFileSync(
  __dirname + "/../config/private.key",
  "utf-8"
);
const publicKey = fs.readFileSync(__dirname + "/../config/public.key", "utf-8");

class UserModel {
  constructor() {
    const UserSchema = new Schema(
      {
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
        },
        name: {
          type: String
        },
        firstname: {
          type: String
        },
        age: {
          type: Date
        }
      },
      {
        timestamps: {
          createdAt: "created_at"
        }
      }
    );
    this.userModel = model("User", UserSchema);
  }

  add({ email, password, name, firstname, age }) {
    const user = new this.userModel({
      email: email,
      password: password,
      name: name,
      firstname: firstname,
      age: age
    });
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) throw err;
          user.password = hash;
          return user.save((err, user) => {
            if (err) reject(err);
            return resolve(user);
          });
        });
      });
    });
  }

  findById(id) {
    return this.userModel.findById(id);
  }

  findByEmail(email) {
    return new Promise((resolve, reject) => {
      return this.userModel.findOne(
        {
          email: email
        },
        (err, user) => {
          if (err) return reject(err);
          return resolve(user);
        }
      );
    });
  }

  find() {
    return new Promise((resolve, reject) => {
      return this.userModel.find({}, (err, users) => {
        if (err) reject(err);
        return resolve(users);
      });
    });
  }

  authenticate(email, password) {
    return this.findByEmail(email)
      .then(user => {
        return bcrypt.compare(password, user.password).then(isMatch => {
          return { user: user, isMatch: isMatch };
        });
      })
      .catch(err => {
        return err;
      });
  }
}

module.exports = new UserModel();
