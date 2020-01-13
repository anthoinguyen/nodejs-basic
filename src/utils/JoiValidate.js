const Joi = require("joi");
const ApiError = require("./ApiError");

const buildUsefulErrorObject = errors => {
  const usefulErrors = [];
  errors.map(error => {
    path = error.path.join("_");
    console.log("Validate:\n" + `error.${path}.${error.type}` + "\n");
    message = ApiError.ApiErrorMessage[`error.${path}.${error.type}`]
      ? ApiError.ApiErrorMessage[`error.${path}.${error.type}`]
      : "Field: " + error.message.replace(/["|(\))]/gi, "");
    code = ApiError.ApiErrorCode[`error.${path}.${error.type}`]
      ? ApiError.ApiErrorCode[`error.${path}.${error.type}`]
      : 100;
    errorCustom = {
      apiCode: code,
      message: message
    };
    usefulErrors.push(errorCustom);
  });
  return usefulErrors;
};

const buildUsefulErrorArrayObject = errors => {
  const usefulErrors = [];
  arrayCheck = [];
  errors.map(error => {
    if (!isNaN(error.path[error.path.length - 1])) {
      error.path[error.path.length - 1] = "index";
      path = error.path.join("_");
      if (!arrayCheck.includes(`error.${path}.${error.type}`)) {
        console.log("Validate:\n" + `error.${path}.${error.type}` + "\n");
        message = ApiError.ApiErrorMessage[`error.${path}.${error.type}`]
          ? ApiError.ApiErrorMessage[`error.${path}.${error.type}`]
          : "Field: " + error.message.replace(/["|(\))]/gi, "");
        code = ApiError.ApiErrorCode[`error.${path}.${error.type}`]
          ? ApiError.ApiErrorCode[`error.${path}.${error.type}`]
          : 100;
        errorCustom = {
          apiCode: code,
          message: message
        };
        arrayCheck.push(`error.${path}.${error.type}`);
        usefulErrors.push(errorCustom);
      }
    } else {
      path = error.path.join("_");
      console.log("Validate:\n" + `error.${path}.${error.type}` + "\n");
      message = ApiError.ApiErrorMessage[`error.${path}.${error.type}`]
        ? ApiError.ApiErrorMessage[`error.${path}.${error.type}`]
        : "Field: " + error.message.replace(/["|(\))]/gi, "");
      code = ApiError.ApiErrorCode[`error.${path}.${error.type}`]
        ? ApiError.ApiErrorCode[`error.${path}.${error.type}`]
        : 100;
      errorCustom = {
        apiCode: code,
        message: message
      };
      usefulErrors.push(errorCustom);
    }
  });
  return usefulErrors;
};
module.exports = {
  validateData: (data, schema) => {
    const options = { abortEarly: false };
    const errors = Joi.validate(data, schema, options);
    return errors.error
      ? buildUsefulErrorArrayObject(errors.error.details)
      : null;
  }
};
