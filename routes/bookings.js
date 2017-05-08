var express = require('express');
var router = express.Router();

router.get('/bookings', function(req, res, next) {
  console.log(req.body);
  res.send('im the home page!');
});

module.exports = router;
