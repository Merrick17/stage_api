const jwt = require("jsonwebtoken");
const verifToken = (req, res, next) => {
  let token = req.headers["access-token"];
  if (!token) {
    res.json({
      success: false,
      result: "No TOken Provided",
    });
    console.log("")
  } else {
    try {
      verif = jwt.verify(token, "TOKEN_SECRET");
      if (verif) {
        next();
      } else {
        res.json({
          success: false,
          result: "unauthorized",
        });
      }
    } catch (error) {
      res.json({
        success: false,
        result: "unauthorized",
      });
    }
  }
};

module.exports = verifToken;
