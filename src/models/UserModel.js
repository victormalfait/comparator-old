"use strict";

const {Schema,model} = require("mongoose");
const Promise = require("bluebird");
const passwordHash = require('password-hash');
const jwt = require('jwt-simple');
const config = require('../config/config');

class UserModel {

  constructor() {
    const UserSchema =new Schema({
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
    },{ timestamps: { createdAt: 'created_at' }});
    this.UserModel = model("User", UserSchema);
  }
}


// userSchema.methods = {
// 	authenticate: (password) => {
// 		return passwordHash.verify(password, this.password);
// 	},
// 	getToken: () => {
// 		return jwt.encode(this, config.secret);
// 	}
// }

module.exports = new UserModel();
