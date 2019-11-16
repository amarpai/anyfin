const rateLimit = require("express-rate-limit");
const config = require("../configs/config.json");

/**
 * Token verification function
 * Returns Unauthorized if invalid.
 */
exports.verifyToken = function(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
};

/**
 * API Rate limit and time configurations
 */
exports.apiLimiter = rateLimit({
  windowMs: config.apiConfig.expiryTime,
  max: config.apiConfig.maxUsers
});

/**
 * This is required for header validation when backend and frontend runs on different ports
 */
exports.corsPolicies = function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};
