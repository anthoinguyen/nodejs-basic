var router = require('express').Router();

require('./home')(router);
require('./user')(router);
require("./auth")(router);

module.exports = router;