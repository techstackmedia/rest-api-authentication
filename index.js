const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./bin/.env" });
const morgan = require("morgan");
const usersRoutes = require("./routes/routes");
require("./database/config/config");

if (process.env.NODE_ENV) {
  app.use(morgan("dev"));
}
app.use(express.json({ extended: true }));
app.use("/api/v1/users/", usersRoutes);
module.exports = app;
