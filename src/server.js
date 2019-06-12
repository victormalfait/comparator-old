"use strict";

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRoute = require("./routes/ProductRoute");
const storeRoute = require("./routes/StoreRoute");
const userRoute = require("./routes/UserRoute");
const config = require("./config/config");
const errorHandler = require("./helpers/error-handler");
const passport = require("passport");
const app = express();
const port = 8080;

const options = {
  useNewUrlParser: true
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

//mongo connection
const dev_db_url =
  "mongodb://" +
  config.mongoDb.user +
  ":" +
  config.mongoDb.password +
  "@" +
  config.mongoDb.host +
  ":" +
  config.mongoDb.port +
  "/" +
  config.mongoDb.database;
// const dev_db_url =
//   "mongodb://" +
//   config.mongoDb.host +
//   ":" +
//   config.mongoDb.port +
//   "/" +
//   config.mongoDb.database;
const mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(
  mongoDB,
  options
);
mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(passport.initialize());
require("./passport")(passport);

app.use("/product", productRoute);
app.use("/store", storeRoute);
app.use("/user", userRoute);

// global error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});

module.exports = app;
