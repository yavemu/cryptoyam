const express = require("express");

const router = express.Router();

// Controllers
const coinController = require("../../controllers/v1/coin.controller");

// route base: GET api/v1/coin
router.get("/", coinController.getAllCoin);

// route base: GET api/v1/top
router.get("/top", coinController.topCoin);

// route base: GET api/v1/coin/:coinId/add
router.get("/:coinId/add", coinController.addCoin);

module.exports = router;
