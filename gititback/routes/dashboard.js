var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('index', { title: 'returnto.me' });
});

router.get('/', function(req, res, next) {
    res.render('dashboard', { title: 'Dashboard', username:req.param.username});
});

module.exports = router;