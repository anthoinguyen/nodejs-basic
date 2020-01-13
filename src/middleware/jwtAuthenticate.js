const RequestHandler = require("../utils/RequestHandle");
const requestHandler = new RequestHandler();
const jwt = require("jsonwebtoken");
const env = require("../../config/env");
const userModel = require("../models/User");

module.exports = async function validateUser(req, res, next) {
  try {
    if (!req.headers["x-access-token"]) {
      return requestHandler.errorCustom(res, "error.REQUIRE_TOKEN", 401);
    }
    jwt.verify(req.headers["x-access-token"], env.JWT_KEY, function(
      err,
      decoded
    ) {
      if (err)
        return requestHandler.errorCustom(res, "error.AUTHENTICATE_FAIL", 401);
      userModel.findById(decoded._id, (err, result) => {
        if (err) return requestHandler.errorProcess(res, err.message);
        if (!result)
          return requestHandler.sendErrorCustom(
            res,
            "error.USER_NOT_FOUND",
            401
          );

        // add user id to request
        req.body.user = result;
        return next();
      });
    });
  } catch (err) {
    return requestHandler.errorProcess(res, err.message);
  }
};
