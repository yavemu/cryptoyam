const express = require("express");

const router = express.Router();

const handleResponse = require("../middlewares/routes/handleResponse");
const handleErrors = require("../middlewares/routes/handleErrors");
const handleError404 = require("../middlewares/routes/handleError404");

const apiRoute = require("./v1");

router.use("/api/v1", apiRoute);
router.use(handleResponse);
router.use(handleError404);
router.use(handleErrors);

module.exports = router;
