var express = require('express');
var router = express.Router();

var inputDate = require('../hotelUtil/dateInput');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hotel', function(req, res, next) {

  let formattedUrl = inputDate("10/17/2019", "12/17/2019")
  res.json({title: formattedUrl})


});


module.exports = router;
