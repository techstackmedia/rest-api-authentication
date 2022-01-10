const dotenv = require("dotenv");
const app = require("../index");
dotenv.config();
const debug = require("debug");
const portConnect = debug("app:connect");

const port = process.env.PORT || 5000;

app.listen(port, () => {
  if (app.get("env")) {
    portConnect(`App running on port ${port}`);
  }
});
