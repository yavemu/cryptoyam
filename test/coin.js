/* eslint-disable no-undef */
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = require("chai");
const app = require("../server");

chai.use(chaiHttp);

describe("################ Coin endpoint test ################", () => {
  const setData = { "content-type": "application/x-www-form-urlencoded" };

  const coinPath = "/api/v1/coin";

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

  describe("Get Coins endpoint test", () => {
    it("[Success get coins]", (done) => {
      chai.request(app)
        .get(coinPath)
        .set(setData)
        .set("Authorization", `Bearer ${token}`)
        .send()
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equals("coin list");
          expect(res.body).to.have.property("coins");
          done();
        });
    });

    it("[Error getting coins by incorrect token]", (done) => {
      chai.request(app)
        .get(coinPath)
        .set(setData)
        .set("Authorization", `Bearer MyToken${token}`)
        .send()
        .end((err, res) => {
          expect(res).to.have.status(401);
          expect(res.body.message).to.equals("Invalid token");
          done();
        });
    });
  });

  describe("Add a Coin endpoint test", () => {
    it("[Success add a coin]", (done) => {
      chai.request(app)
        .get(`${coinPath}/bitcoin/add`)
        .set(setData)
        .set("Authorization", `Bearer ${token}`)
        .send()
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equals("Coin Add success");
          expect(res.body).to.have.property("coin");
          done();
        });
    });

    it("[Error add a coin by incorrect token]", (done) => {
      chai.request(app)
        .get(`${coinPath}/bitcoin/add`)
        .set(setData)
        .set("Authorization", `Bearer MyToken${token}`)
        .send()
        .end((err, res) => {
          expect(res).to.have.status(401);
          expect(res.body.message).to.equals("Invalid token");
          done();
        });
    });

    it("[Error add a coin by incorrect coinId]", (done) => {
      chai.request(app)
        .get(`${coinPath}/IncorrectCoinID/add`)
        .set(setData)
        .set("Authorization", `Bearer ${token}`)
        .send()
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equals("This coin does not exist");
          done();
        });
    });
  });

  describe("Get top Coins endpoint test", () => {
    it("[Success top coins default sort and limit]", (done) => {
      chai.request(app)
        .get(`${coinPath}/top`)
        .set(setData)
        .set("Authorization", `Bearer ${token}`)
        .send()
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equals("Top Coin list");
          expect(res.body.sort).to.equals("-current_price");
          expect(res.body.limit).to.equals(25);
          expect(res.body).to.have.property("topCoins");
          done();
        });
    });

    it("[Success top coins custom sort and limit]", (done) => {
      chai.request(app)
        .get(`${coinPath}/top?sort=asc&limit=10`)
        .set(setData)
        .set("Authorization", `Bearer ${token}`)
        .send()
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equals("Top Coin list");
          expect(res.body.sort).to.equals("current_price");
          expect(res.body.limit).to.equals(10);
          expect(res.body).to.have.property("topCoins");
          done();
        });
    });

    it("[Error top coins by incorrect token]", (done) => {
      chai.request(app)
        .get(`${coinPath}/top`)
        .set(setData)
        .set("Authorization", `Bearer MyToken${token}`)
        .send()
        .end((err, res) => {
          expect(res).to.have.status(401);
          expect(res.body.message).to.equals("Invalid token");
          done();
        });
    });
  });
});
