var express = require('express');
var router = express.Router();
var userModel = require('../models/userSchema');

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('index', { title: 'GitItBack' });
});

router.get('/', function(req, res, next) {
    res.render('signup', { title: 'GIB Sign Up' });
});

router.post('/', function(req, res, next){

	var fluffy = new userModel({
    first: req.body.first,
    last: req.body.last,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone
	});

	fluffy.save(function (err, fluffy) {
  	if (err) return console.error(err);
	});

   res.redirect('dashboard');

});

module.exports = router;
