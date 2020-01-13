const ApiErrorMessage = {
  "error.firstName.any.required": "First Name is required.",
  "error.firstName.any.empty": "First Name is not allowed to be empty",
  "error.firstName.string.base": "First Name must be a string",
  "error.firstName.string.min":
    " First Name length must be from 3 to 10 characters long",
  "error.firstName.string.max":
    " First Name length must be from 3 to 10 characters long",

  "error.lastName.any.required": "Last Name is required.",
  "error.lastName.any.empty": "Last Name is not allowed to be empty",
  "error.lastName.string.base": "Last Name must be a string",
  "error.lastName.string.min":
    " Last Name length must be from 3 to 20 characters long",
  "error.lastName.string.max":
    " Last Name length must be from 3 to 20 characters long",

  "error.email.any.required": "Email is required.",
  "error.email.any.empty": "Email is not allowed to be empty",
  "error.email.string.base": "Email format is incorrect",
  "error.email.string.email": "Email format is incorrect",

  "error.password.any.required": "Password is required.",
  "error.password.any.empty": "Password is not allowed to be empty",
  "error.password.string.base": "Password must be a string",
  "error.password.string.min":
    " Password length must be from 3 to 20 characters long",
  "error.password.string.max":
    " Password length must be from 3 to 20 characters long",
  "error.passwordConfirmation.any.required":
    "Password confirmation is required.",
  "error.passwordConfirmation.any.allowOnly":
    "Password confirmation not match.",

  "error.gender.any.required": "Gender is required.",
  "error.gender.any.empty": "Gender is not allowed to be empty",
  "error.gender.string.base": "Gender must be a string",
  "error.gender.any.allowOnly": "Gender must be male or female",

  "error.dateOfBirth.any.required": "Date of birth is required.",
  "error.dateOfBirth.date.base": "Date of birth format must be a date.",

  //error custom
  "error.USER_NOT_FOUND": "User not found",
  "error.USER_EXISTED": "User not found",
  "error.EMAIL_EXISTED": "Email existed",
  "error.PASSWORD_INCORRECT": "Password is incorrect",

  "error.AUTHENTICATE_FAIL": "Authenticate fail",
  "error.REQUIRE_TOKEN": "Token is required.",
};
// 100: code for Joi message default
// 200: code for custom message default
const ApiErrorCode = {
  "error.firstName.any.required": 1,
  "error.firstName.any.empty": 2,
  "error.firstName.string.base": 3,
  "error.firstName.string.min": 4,
  "error.firstName.string.max": 5,

  "error.lastName.any.required": 11,
  "error.lastName.any.empty": 12,
  "error.lastName.string.base": 13,
  "error.lastName.string.min": 14,
  "error.lastName.string.max": 15,

  "error.email.any.required": 21,
  "error.email.any.empty": 22,
  "error.email.string.base": 23,
  "error.email.string.email": 24,

  "error.password.any.required": 31,
  "error.password.any.empty": 32,
  "error.password.string.base": 33,
  "error.password.string.min": 34,
  "error.password.string.max": 35,
  "error.passwordConfirmation.any.required": 36,
  "error.passwordConfirmation.any.allowOnly": 37,

  "error.gender.any.required": 41,
  "error.gender.any.empty": 42,
  "error.gender.string.base": 43,
  "error.gender.any.allowOnly": 44,

  "error.dateOfBirth.any.required": 51,
  "error.dateOfBirth.date.base": 52,

  // 
  "error.USER_NOT_FOUND": 101,
  "error.USER_EXISTED": 102,
  "error.EMAIL_EXISTED": 103,
  "error.PASSWORD_INCORRECT": 104,

  "error.AUTHENTICATE_FAIL": 105,
  "error.REQUIRE_TOKEN": 106,
};
module.exports = {
  ApiErrorCode: ApiErrorCode,
  ApiErrorMessage: ApiErrorMessage
};
