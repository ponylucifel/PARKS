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
    if (userModel.find({username: req.body.username}).where('password').equals(req.body.pass)) {
	console.log(username, )
	res.redirect('dashboard')
    }
    else {
	console.log('gtfo!')
	res.render('login', {title:'GIB login', message:'Wrong email/password entered.'})
    }
});

module.exports = router;
