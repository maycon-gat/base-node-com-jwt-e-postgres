const jwt = require("jsonwebtoken");

module.exports = {
  _auth: (auth = function auth(req, res, next) {
    const authToken = req.headers["authorization"];
    if (authToken != undefined) {
      const bearer = authToken.split(" ");
      var token = bearer[1];
      jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if (err) {
          res.status(401).json({
            message: "Token inválido!",
          });
        } else {
          req.token = token;
          next();
        }
      });
    } else {
      res.status(401).json({
        message: "Token inválido!",
      });
    }
  }),
  get const() {
    return this._auth;
  },
  set const(value) {
    this._auth = value;
  },
};
