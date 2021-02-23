const express = require("express");
const router = express.Router();

const handleErrors = require("../middlewares/routes/handleErrors");
const handleError404 = require("../middlewares/routes/handleError404");

const apiRoute = require("./api");

router.use("*", (req, res, next) => {
  console.log(`Request was made to => ${req.method} ${req.originalUrl}`);
  return next();
});

router.use("/api", apiRoute);
router.use(handleError404);
router.use(handleErrors);

module.exports = router;
