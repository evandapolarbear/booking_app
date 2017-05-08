var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("INDEX GET")
  next()
});

module.exports = router;
