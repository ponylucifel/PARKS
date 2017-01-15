/**
 * Created by thanaponsathirathiwat on 1/14/17.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('index', { title: 'returnto.me' });
});

router.get('/', function(req, res, next) {
    console.log(req.body.username);
    res.render('lost', { title: 'Lost Item', username:req.body.username});
});

router.post('/', function(req, res, next){
    res.render('notify', { message: 'Your request has been submitted succesfully.  You will receive a notification through your email once someone found your item.'})
});

module.exports = router;