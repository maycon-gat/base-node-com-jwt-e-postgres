const express = require("express");
const server = express();
const cors = require("cors");

require("dotenv").config("../.env");

server.use(cors());
server.use(require("./routes"));
server.use(
  express.json({
    limit: "50mb",
  })
);

server.listen(process.env.SV_PORT || 7070, () =>
  console.log("Servidor rodando na porta: " + process.env.SV_PORT)
);
