module.exports = {
  notAllow: res => {
    return res.status(403).send({
      error: true,
      message: "Not authorized to access this resource",
      data: null
    });
  },

  errorProcess: (res, err) => {
    return res.status(500).send({
      error: true,
      message: `Error during process ${err.message}`,
      data: null
    }); 
  },

  errorWithMessage: (res, mess) => {
    return res.status(406).send({
      error: true,
      message: mess,
      data:null
    })
  },

  success: (res, mess, data, option = {}) => {
    return res.json({
      error: false,
      message: mess,
      data,
      option
    })
  },

  successWithNoData: (res, mess, option = {}) => {
    return res.json({
      error: false,
      message: mess,
      data: null,
      option
    })
  },

}

