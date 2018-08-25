const Authentication = require("./controllers/authentication");
module.exports = app => {
  app.get("/", (req, res, next) =>
    res.send(["your", "get", "request", "is working"])
  );
};
