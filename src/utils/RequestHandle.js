const ApiError = require("./ApiError");

class RequestHandler {
  constructor() {
    this.error = false;
    this.errors = [];
    this.data = null;
    this.status = 200;
  }

  reset() {
    this.error = false;
    this.errors = [];
    this.data = null;
    this.status = 200;
  }

  send(res) {
    res.status(this.status).json({
      error: this.error,
      errors: this.errors,
      data: this.data
    });
    this.reset();
  }

  success(res, data, status) {
    if (status) {
      this.status = status;
    }
    if (data) {
      this.data = data;
    }
    this.send(res);
  }

  errorJoi(res, errors, status) {
    this.error = true;
    if (status) {
      this.status = status;
    } else {
      this.status = 400;
    }
    this.errors = errors;
    this.send(res);
  }

  errorCustom(res, errorName, status) {
    this.error = true;
    if (status) {
      this.status = status;
    } else {
      this.status = 500;
    }
    this.errors[0] = {
      apiCode: ApiError.ApiErrorCode[errorName]
        ? ApiError.ApiErrorCode[errorName]
        : 200,
      message: ApiError.ApiErrorMessage[errorName]
        ? ApiError.ApiErrorMessage[errorName]
        : "Server Error!"
    };
    this.send(res);
  }

  errorProcess(res, error, status) {
    this.error = true;
    if (status) {
      this.status = status;
    } else {
      this.status = 400;
    }
    this.errors[0] = {
      apiCode: 9999,
      message: error ? error : "Server Error!"
    };
    this.send(res);
  }
}
module.exports = RequestHandler;
