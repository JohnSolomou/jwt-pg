const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");
    if (!jwtToken) {
      return res.status(403).json("not authorized");
    }
    const payload = jwt.verify(jwtToken, process.env.JWT_KEY);
    req.user = payload.user;
  } catch (err) {
    console.log(err.message);
    return res.status(403).json("you are not authorized");
  }
};
