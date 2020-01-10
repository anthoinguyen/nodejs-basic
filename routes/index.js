var router = require("express").Router();
require("express-group-routes");

require("./home")(router);
require("./user")(router);
require("./auth")(router);

module.exports = router;
