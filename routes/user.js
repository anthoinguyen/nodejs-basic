const users = require("../controllers/userController");
const authMiddleware = require("../middleware/auth");

module.exports = (app) => {
  app.group("/user", (router) => {
    router.use(authMiddleware);
    router.get("/", users.getUser);
    router.get("/list", users.listUser);
    router.get("/:userId", users.getUserById);
    router.put("/:userId", users.updateUser);
    router.delete("/:userId", users.deleteUser);
  });
};
