const express = require("express");
const router = express.Router();

const authController = require("../../controllers/v1/auth.controller");

router.use("/auth", authController);

module.exports = router;
