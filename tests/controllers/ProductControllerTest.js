"use strict";

const chai = require("chai");
const should = chai.should();
const sinon = require("sinon");
const chaiHttp = require("chai-http");
const server = require("../../src/server");
const productModel = require("../../src/models/ProductModel");
const productController = require("../../src/controllers/ProductController");
const Promise = require("bluebird");
chai.use(chaiHttp);

describe("Product Controller", () => {
  describe("getProducts", () => {
    let req = {};
    let res = {};
    beforeEach(() => {
      req = {};
      res = {
        status: sinon.spy(),
        json: sinon.spy()
      };
    });
    it("should return 200 and products object", (done) => {
      chai.request(server)
        .get("/product")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.products.should.be.a("array");
          done();
        });
    });
    it("should return 500 and error message", (done) => {
      sinon.stub(productModel,"findAll").callsFake(() => {
        return new Promise.reject();
      });
      chai.request(server)
        .get("/product")
        .end((err, res) => {
          res.should.have.status(500);
          done();
        });
    });
    it("should return JSON with 200 status", (done) => {
      productController.getProudcts(req, res);
      done();
    });
  });
  describe("getProduct", () => {
    it("should return 200 and get product", (done) => {
      done();
    });
  });
});
