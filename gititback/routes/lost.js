/**
 * Created by thanaponsathirathiwat on 1/14/17.
 */

var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    console.log(req.body.username);
    res.render('lost', { title: 'Lost Item', username:req.body.username});
});

router.post('/', function(req, res, next){
    res.render('notify', { message: 'Your request has been submitted succesfully.  You will receive a notification through your email once someone found your item.', username:req.body.username})
});

module.exports = router;