const dotenv = require("dotenv");
const debug = require("debug");
const app = require("../app");

dotenv.config();
const portConnect = debug("app:connect");

const port = process.env.PORT || 5000;

app.listen(port, () => {
  if (app.get("env")) {
    portConnect(`App running on port ${port}`);
  }
});
