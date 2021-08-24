var express = require("express");
var route = express.Router();

/**
 *
 */
// router.get(`/:id`, HomeController.home);
route.get('/home', HomeController.home);
module.exports = router;