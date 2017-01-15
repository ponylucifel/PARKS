/**
 * Created by thanaponsathirathiwat on 1/14/17.
 */

//var express = require('express');
//var router = express.Router();
//
//
//router.get('/', function(req, res, next) {
//    console.log(req.body.username);
//    res.render('lost', { title: 'Lost Item', username:req.body.username});
//});
//
//router.post('/', function(req, res, next){
//    res.render('notify', { message: 'Your request has been submitted succesfully.  You will receive a notification through your email once someone found your item.', username:req.body.username})
//});
//
//module.exports = router;

var express = require('express');
var router = express.Router();
var itemModel = require('../models/itemSchema')
var userModel = require('../models/userSchema')
var moment = require('moment')

router.get('/', function(req, res, next) {
    console.log(req.body.username);
    res.render('lost', { title: 'Lost Item', username:req.body.username});
});

router.post('/', function(req, res, next){
    reporteddate = moment(req.body.date, ["MM-DD-YYYY", "DD-MM-YYYY"]).unix();
    var newItem = new itemModel ({
        username: req.body.username,
        itemName: req.body.itemName,
        email: req.body.email,
        phone: req.body.phone,
        date: reporteddate,
        location: req.body.location,
        text: req.body.text
    });
    newItem.save(function(err,data){
        if(err){
            console.log(err)
        }
        else {
            console.log('Saved! ', newItem)
            res.render('notify', { message: 'Your request has been submitted succesfully.  You will receive a notification through your email once someone found your item.', username:req.body.username})
        }
    });
});


module.exports = router;