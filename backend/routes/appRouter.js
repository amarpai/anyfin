var express = require("express");
var router = express.Router();
var countriesList = require("../controllers/listController");
var login = require("../controllers/loginController");
var middleware = require("../middleware/middleware");

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
