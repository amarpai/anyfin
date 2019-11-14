const rateLimit = require("express-rate-limit");
const config = require("../configs/config.json");

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

exports.apiLimiter = rateLimit({
  windowMs: config.apiConfig.expiryTime,
  max: config.apiConfig.maxUsers
});
