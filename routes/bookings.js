var express = require('express');
var router = express.Router();

let allBookings = {}

function getDay(client, date){
  return allBooking[client][date]
}

router.all('/', (req, res, next) => {
  req.body = JSON.parse(req.body);
  // req.events = getDay(req.user, req.day)
  next()
});

router.get('/', (req, res, next) => {
  res.json(req.body);
  res.end()
});

router.post('/', (req, res, next) => {
  if(!req.body || req.body.length === 0) {
    console.log('request body not found');
    return res.sendStatus(400);
  }
  res.send(JSON.parse(req.body));
})

module.exports = router;
