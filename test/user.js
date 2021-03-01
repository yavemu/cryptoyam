/* eslint-disable no-undef */
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = require("chai");
const app = require("../server");

chai.use(chaiHttp);

describe("################ User endpoint test ################", () => {
  const setData = { "content-type": "application/x-www-form-urlencoded" };

  const userPath = "/api/v1/user";
  const userData = {
    name: "yamid",
    lastname: "vm",
    username: "yam2",
    password: "password123",
    currency: "eur",
  };

  let token = "";

  before((done) => {
    const loginPath = "/api/v1/auth/login";
    const loginData = {
      username: "yam",
      password: "password123",
    };

    chai.request(app)
      .post(loginPath)
      .set(setData)
      .send(loginData)
      .end((err, res) => {
        token = res.body.token;
        expect(res).to.have.status(200);
        expect(res.body.message).to.equals("Login success");
        expect(res.body).to.have.property("token");
        done();
      });
  });

  describe("Create User endpoint test", () => {
    it("[Success create users]", (done) => {
      chai.request(app)
        .post(userPath)
        .set(setData)
        .set("Authorization", `Bearer ${token}`)
        .send(userData)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equals("user created success");
          expect(res.body).to.have.property("user");
          done();
        });
    });

    it("[Error creating user by incorrect token]", (done) => {
      chai.request(app)
        .post(userPath)
        .set(setData)
        .set("Authorization", `Bearer MyToken${token}`)
        .send(userData)
        .end((err, res) => {
          expect(res).to.have.status(401);
          expect(res.body.message).to.equals("Invalid token");
          done();
        });
    });

    it("[Error creating user by username exist]", (done) => {
      chai.request(app)
        .post(userPath)
        .set(setData)
        .set("Authorization", `Bearer ${token}`)
        .send(userData)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equals("Validations errors");
          expect(res.body.error.fields[0].message).to.equals("\"username\" already exists");
          done();
        });
    });

    it("[Error creating user by password error]", (done) => {
      chai.request(app)
        .post(userPath)
        .set(setData)
        .set("Authorization", `Bearer ${token}`)
        .send({ ...userData, password: "123" })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equals("Validations errors");
          expect(res.body.error.fields[0].message).to.equals("\"password\" length must be at least 8 characters long");
          done();
        });
    });

    it("[Error creating user by emtpy field]", (done) => {
      delete userData.password;
      chai.request(app)
        .post(userPath)
        .set(setData)
        .set("Authorization", `Bearer ${token}`)
        .send(userData)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equals("Validations errors");
          expect(res.body.error.fields[0].message).to.equals("\"password\" is required");
          done();
        });
    });
  });

  describe("Get users endpoint test", () => {
    it("[Success get users]", (done) => {
      chai.request(app)
        .get(userPath)
        .set(setData)
        .set("Authorization", `Bearer ${token}`)
        .send()
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equals("user list");
          expect(res.body).to.have.property("users");
          done();
        });
    });
    it("[Error getting users by incorrect token]", (done) => {
      chai.request(app)
        .post(userPath)
        .set(setData)
        .set("Authorization", `Bearer MyToken${token}`)
        .send(userData)
        .end((err, res) => {
          expect(res).to.have.status(401);
          expect(res.body.message).to.equals("Invalid token");
          done();
        });
    });
  });
});
