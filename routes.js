const latest = require("./api/latest");

function routes(app) {
  app.use("/api/latest", latest);
}

module.exports = routes;
