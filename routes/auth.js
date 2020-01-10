const auth = require("../controllers/authController");
const authMiddleware = require("../middleware/auth");

module.exports = (app) => {
  app.group("/auth", (router) => {
    router.post("/signup", auth.signup);
    router.post("/signin", auth.signin);
    router.get("/res-forgot-password", auth.resForgotPassword);
    router.get("/acc-forgot-password", auth.accForgotPassword);
    router.get("/change-password",authMiddleware, auth.changePassword);
  });
};
