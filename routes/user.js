const users = require("../controllers/users");

module.exports = (app) => {
  app.route("/users/:userId").get(users.getUser),
  app.route("/users/:userId").put(users.updateUser),
  app.route("/users/:userId").delete(users.deleteUser),
  app.route("/users/list").get(users.listUser);
};
