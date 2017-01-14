var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'GIB Login' });
});

router.post('/', function(req, res, next) {
    res.redirect('dashboard');
});

module.exports = router;
