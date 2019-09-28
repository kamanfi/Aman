var express = require('express');
var router = express.Router();

var inputDate = require('../hotelUtil/dateInput')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hotel', function(req, res, next) {

  formattedUrl = inputDate(req.body.arrive, req.body.depart)
  console.log(formattedUrl);
  res.json({title: formattedUrl })
});

module.exports = router;
