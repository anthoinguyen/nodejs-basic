const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwt_key = require("../config/constants");
var {
  success,
  errorProcess,
  errorWithMessage
} = require("../services/returnToUser");

const signup = async (req, res) => {
  try {
    let errors = false;
    if (!errors) {
      const { username, email, password } = req.body;
      let user = await User.findOne({ email });

      if (user) {
        return errorWithMessage(res, "Email is exits");
      } else {
        user = new User({ username, email, password });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        const token = jwt.sign({ _id: user._id }, jwt_key.JWT_KEY);

        await user.save();

        return success(res, "Success", { user, token });
      }
    } else {
      return errorWithMessage(res, errors.array());
    }
  } catch (error) {
    return errorProcess(res, error);
  }
};

const signin = async (req, res) => {
  try {
    let errors = false;
    if (!errors) {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return errorWithMessage(res, "Login failed! Email is do not exits");
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return errorWithMessage(res, "Login failed! Password don't matching");
      }

      const token = jwt.sign({ _id: user._id }, jwt_key.JWT_KEY);

      return success(res, "Success", { user, token });
    } else {
      return errorWithMessage(res, errors);
    }
  } catch (error) {
    return errorProcess(res, error);
  }
};

const resForgotPassword = (req, res) => {};

const accForgotPassword = (req, res) => {};

const changePassword = (req, res) => {};

module.exports = {
  signin,
  signup,
  resForgotPassword,
  accForgotPassword,
  changePassword
};
