var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('signup', { title: 'GIB Sign Up' });
});

router.post('/', function(req, res, next){
   res.redirect('dashboard');
});

module.exports = router;
