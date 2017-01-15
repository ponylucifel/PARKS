/**
 * Created by thanaponsathirathiwat on 1/14/17.
 */

var express = require('express');
var router = express.Router();
var itemModel = require('../models/itemSchema');
var moment = require('moment');


router.get('/', function(req, res, next) {
    console.log(req.body);
    
    res.render('found', {title: 'Search Item For', username: req.body.username});
});

// Input data:
// item_name
// date
// location
// description

router.post('/', function(req, res, next) {
	reporteddate = moment(req.body.date, ["MM-DD-YYYY", "DD-MM-YYYY"]).unix();
	var newItem = new itemModel ({
		username: req.body.username,
		itemName: req.body.itemName,
		email: req.body.email,
		isLost: false,
		isActive: true,
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
			res.render('notify', { message: 'Your response has been submitted succesfully.  Thank you for being so kind.  You bring us one step closer to Utopia.', username:req.body.username})
		}
	});
});

//{ $or: [{a: 1}, {b: 1}] }

// Item Schema:
// 	username: String,
//     email: String,
//     phone: String,
//     location: {latitude:Number, longitude:Number},
//     date: Number,
//     text: String,
//     createdTime: {type: Number, default: Date.now},
//     loggedinTime: {type: Number, default: null}

module.exports = router;