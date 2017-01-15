var express = require('express');
var router = express.Router();
var userModel = require('../models/userSchema');

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('index', { title: 'GitItBack' });
});

router.get('/', function(req, res, next) {
    res.render('login', { title: 'GIB Login', message:''});
});

router.post('/', function(req, res, next) {
    userModel.findOne({username: req.body.username}, "pass", function(err, user){
	if ((user==null)||(user.pass != req.body.pass)) {
		console.log("Failed to log in")
		res.render('login', {title:'GIB login', message:'Wrong email/password entered.'})
	}
	else {
		console.log("user has logged in successfully!")
		res.render('dashboard', {username: req.body.username})
	}
    })
});

module.exports = router;
