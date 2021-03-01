/* eslint-disable no-undef */
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = require("chai");
const mongoose = require("mongoose");
const app = require("../server");

chai.use(chaiHttp);

describe("################ Authentication endpoint test ################", () => {
  before(async () => {
    const collections = await mongoose.connection.db.listCollections().toArray();

    await collections.map((collection) => collection.name).forEach(async (collectionName) => {
      mongoose.connection.db.dropCollection(collectionName);
    });
  });

  const setData = { "content-type": "application/x-www-form-urlencoded" };

  const siginPath = "/api/v1/auth/signin";
  const siginData = {
    name: "yamid",
    lastname: "vm",
    username: "yam",
    password: "password123",
    currency: "eur",
  };

  const loginPath = "/api/v1/auth/login";
  const loginData = {
    username: "yam",
    password: "password123",
  };
  describe("Signin endpoint test", () => {
    it("[Success siging]", (done) => {
      chai.request(app)
        .post(siginPath)
        .set(setData)
        .send(siginData)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equals("user created success");
          done();
        });
    });

    it("[Error siging by username exist]", (done) => {
      chai.request(app)
        .post(siginPath)
        .set(setData)
        .send(siginData)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equals("Validations errors");
          expect(res.body.error.fields[0].message).to.equals("\"username\" already exists");
          done();
        });
    });

    it("[Error siging by password error]", (done) => {
      chai.request(app)
        .post(siginPath)
        .set(setData)
        .send({ ...siginData, password: "123" })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equals("Validations errors");
          expect(res.body.error.fields[0].message).to.equals("\"password\" length must be at least 8 characters long");
          done();
        });
    });

    it("[Error siging by emtpy field]", (done) => {
      delete siginData.password;
      chai.request(app)
        .post(siginPath)
        .set(setData)
        .send(siginData)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equals("Validations errors");
          expect(res.body.error.fields[0].message).to.equals("\"password\" is required");
          done();
        });
    });
  });

  describe("Login endpoint test", () => {
    it("[Success login]", (done) => {
      chai.request(app)
        .post(loginPath)
        .set(setData)
        .send(loginData)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equals("Login success");
          expect(res.body).to.have.property("token");
          done();
        });
    });

    it("[Error login by incorrect data]", (done) => {
      chai.request(app)
        .post(loginPath)
        .set(setData)
        .send({ ...loginData, password: "123" })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equals("username and password incorrect");
          done();
        });
    });

    it("[Error login by emtpy field]", (done) => {
      delete loginData.password;
      chai.request(app)
        .post(loginPath)
        .set(setData)
        .send(loginData)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equals("Validations errors");
          expect(res.body.error.fields[0].message).to.equals("\"password\" is required");
          done();
        });
    });
  });
});
