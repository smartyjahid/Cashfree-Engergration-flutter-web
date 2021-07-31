var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  var urlpram = req.query;
  console.log(urlpram.name);
  console.log(urlpram.amount);
  res.render('index', { title: 'Cashfree PG simulator',names: urlpram.name,amount: urlpram.amount});
});

// router.get('/request', function(req, res, next) {
//   res.render('request');
// });
module.exports = router;
