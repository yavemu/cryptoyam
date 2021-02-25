const express = require("express");

const router = express.Router();

// Controllers
const authController = require("../../controllers/v1/auth.controller");

// middlewares
const { loginUserSchema } = require("../../middlewares/modelValidations/auth.schema");
const { createUserSchema } = require("../../middlewares/modelValidations/user.schema");

// route base: api/v1/auth/login
router.post("/login", loginUserSchema, authController.login);
router.post("/signin", createUserSchema, authController.signin);

module.exports = router;
