const express = require("express");

const router = express.Router();

// Controllers
const userController = require("../../controllers/v1/user.controller");

// middlewares
const { createUserSchema } = require("../../middlewares/modelValidations/user.schema");

// route base: POST api/v1/user/
router.post("/", createUserSchema, userController.createUser);

// route base: GET api/v1/user/
router.get("/", userController.getAllUser);

module.exports = router;
