const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
var { notAllow,errorWithMessage,errorProcess } = require("../services/returnToUser");
const jwt_key = require("../config/constants");

const auth = async (req, res, next) => {
  try {
    const token = req.header("authorization").replace("Bearer ", "");
    if (!token) {
      return notAllow(res);
    } else {
      const decoded = jwt.verify(token, jwt_key.JWT_KEY);
      userId = decoded._id;
      user = await User.findById({ _id: userId }).exec();
      if (!user) {
        return errorWithMessage(res,"Token is incorrect");
      } else {
        req.user = user;
        next();
      }
    }
  } catch (error) {
    return errorProcess(res,error);
  }
};

module.exports = auth;
