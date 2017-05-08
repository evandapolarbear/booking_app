var express = require('express');
var router = express.Router();

let allBookings = {}
//sampleState = {
  'evanDaPolarBear' : {
    '2017-6-7': [
      {'eventName': 'name',
       'eventDescription': 'descr',
       'startTime': '11:30',
       'endTime': '1:15'
      }
    ]
  }

}

function getDay(client, date){
  return allBooking[client][date]
}

router.all('/', (req, res, next) => {
  // req.events = getDay(req.user, req.day)
  next()
});

router.get('/', (req, res, next) => {
  res.json(req.body);
  res.end()
});

router.post('/', (req, res, next) => {
  res.send(req.body);
})

module.exports = router;
