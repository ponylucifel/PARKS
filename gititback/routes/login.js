var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('index', { title: 'returnto.me' });
});

router.get('/', function(req, res, next) {
    console.log(req.body);
    res.render('login', { title: 'Login', message:''});
});

router.post('/', function(req, res, next) {
    if(req.body.username == "root" && req.body.pass == "pass")
        res.redirect('dashboard');
    else
        res.render('login', { title: 'GIB Login', message:'Wrong password entered.'});
});

module.exports = router;
