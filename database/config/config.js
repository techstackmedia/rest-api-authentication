const mongoose = require("mongoose");
const debug = require("debug");

const appConnect = debug("app:connect");

module.exports = mongoose
  .connect(
    `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.n5uqo.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`
  )
  .then(appConnect("connected to the database..."))
  .catch((err) => appConnect(err, "Unable to connect to database..."));
