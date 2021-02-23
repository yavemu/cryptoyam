const express = require("express");
const router = express.Router();

//Services
const login = require("../../services/v1/auth/login.services");

//route base: api/v1/auth/login
router.get("/login", login);

module.exports = router;
