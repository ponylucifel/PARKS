var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'returnto.me' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'returnto.me' });
});


module.exports = router;
