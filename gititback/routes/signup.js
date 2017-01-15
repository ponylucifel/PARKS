var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('index', { title: 'returnto.me' });
});

router.get('/', function(req, res, next) {
    res.render('signup', { title: 'Sign Up' });
});

router.post('/', function(req, res, next){
   res.redirect('dashboard');
});

module.exports = router;
