const express = require("express");
const routes = express.Router();
const authConfig = require("./auth/authConfig");
const authController = require("./controller/authController");

// TESTE AUTH
routes.post("/login", authController.login);
routes.get("/teste", authConfig._auth, (req, res) => {
  return res.status(200).json({ info: "ok" });
});

module.exports = routes;
