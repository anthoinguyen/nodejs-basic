const home = require("../controllers/homeController");

module.exports = (app) => {
  app.group("/", (router) => {
    router.get("/", home.index);
  });
}