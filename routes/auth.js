const auth = require("../controllers/auth");

module.exports = (app) => {
  app.route("/auth/signup").get(auth.signup),
  app.route("/auth/signin").get(auth.signin),
  app.route("/auth/res-forgot-password").get(auth.resForgotPassword),
  app.route("/auth/acc-forgot-password").get(auth.accForgotPassword),
  app.route("/change-password").get(auth.changePassword);
};
