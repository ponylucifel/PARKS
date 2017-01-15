/**
 * Created by thanaponsathirathiwat on 1/14/17.
 */

var express = require('express');
var router = express.Router();
var itemModel = require('../models/itemSchema');

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('index', { title: 'GitItBack' });
});

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

String.prototype.cleanup = function() {
   return this.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-"); //leave only alphabets, change the rest to "-"
}

	//Keywords parsing:
	var tempStringDescription = req.body.description
	tempStringDescription = tempStringDescription.trim();
	tempStringDescription = tempStringDescription.cleanup();
	var itemKeywords = tempStringDescription.split("-");		//array of keywords
	console.log(itemKeywords)

	//todo rank itemKeywords based on something!


	//date
	var tempDate = req.body.date
	//location
	var location = req.body.location

	//container for query result
	var myJsonArray = []
	
	cursor = itemModel.find({ $or: [{text:req.body.item_name}, {text:location},{text:itemKeywords[0]}] }).cursor();
	cursor.on('data', function(doc) {
	  // Called once for every document
	  console.log(doc)			
	  myJsonArray.push(doc);		//join all json into array "result from query"

	});
	cursor.on('close', function() {
	  // Called when done
	});

    res.render('found', {title: 'Result Item for ', myJson: myJsonArray, myItemName: req.body.item_name, username: req.body.username});
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