const jwt = require("jsonwebtoken");
const config = require("../configs/config.json");

exports.getLoginToken = function(req, res) {
  // Requires user validation but using a dummy user as i am not using any database
  const user = {
    id: 1,
    username: "amar",
    email: "amar1061@gmail.com"
  };

  jwt.sign({ user: user }, "secretkey", (err, token) => {
    res.json({
      token: token
    });
  });
};
