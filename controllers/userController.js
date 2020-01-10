const User = require("../models/userModel");
var {
  success,
  errorProcess,
  errorWithMessage
} = require("../services/returnToUser");

const listUser = async (req, res) => {
  try {
    let users = await User.find({}).exec();
    if (!users) {
      return errorWithMessage(res, "Not Found");
    } else {
      return success(res, "Success", users);
    }
  } catch (err) {
    return errorProcess(res, err);
  }
};

const getUser = async (req, res) => {
  let { user } = req;
  return success(res, "Success", user);
};

const getUserById = async (req, res) => {
  let userId = req.params.userId;
  try {
    let user = await User.findById({ _id: userId }).exec();
    if (!user) {
      return errorWithMessage(res, "Not Found");
    } else {
      return success(res, "Success", user);
    }
  } catch (err) {
    return errorProcess(res, err);
  }
};

const updateUser = (req, res) => {};

const deleteUser = (req, res) => {};

module.exports = {
  listUser,
  getUser,
  getUserById,
  deleteUser,
  updateUser
};
