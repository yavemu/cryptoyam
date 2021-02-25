const express = require("express");
const Authorization = require("../../middlewares/authorization");

const router = express.Router();

const authRoute = require("./auth.route");
const userRoute = require("./user.route");

router.use("/auth", authRoute);
router.use("/user", Authorization, userRoute);

module.exports = router;
