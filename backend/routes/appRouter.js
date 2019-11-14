const express = require("express");
const router = express.Router();
const countriesList = require("../controllers/listController");
const login = require("../controllers/loginController");
const middleware = require("../middleware/middleware");

/* GET JWT token to access api endpoints. */
router.post("/login", login.getLoginToken);

/* GET country details by Name. */
router.get(
  "/country/:name?",
  middleware.apiLimiter,
  middleware.verifyToken,
  countriesList.getCountryDetails
);

module.exports = router;
