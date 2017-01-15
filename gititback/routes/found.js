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

//leave only alphabets, change the rest to "-"
String.prototype.cleanup = function() {
   return this.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-");
}

// Input data:
// item_name
// date
// location
// description

router.post('/', function(req, res, next) {

	//Keywords parsing:
	var tempStringDescription = req.body.description
	tempStringDescription = tempStringDescription.cleanup();
	var itemKeywords = tempStringDescription.split("-");		//array of keywords

	//date
	var tempDate = req.body.date

	//location
	var location = req.body.location


	var myJson = "testData"


    res.render('found', { title: 'Seach Result for ', item_name: itemKeywords, myjsonData = myJson });
});

//{ $or: [{a: 1}, {b: 1}] }


/*
itemModel.find({ $or: [{a: req.body.description}, {b: 1}] }, "pass", function(err, user){
	if ((user==null)||(user.pass != req.body.pass)) {
		console.log("Failed to log in")
		res.render('login', {title:'Login', message:'Wrong email/password entered.'})
	}
	else {
		console.log("user has logged in successfully!")
		res.render('dashboard', {title: 'Dashboard', username: req.body.username});
	}
    })


// Find a single movie by name.
Movie.findOne({ title: 'Thor' }, function(err, thor) {
  if (err) return console.error(err);
  console.dir(thor);
});
// Find all movies.
Movie.find(function(err, movies) {
  if (err) return console.error(err);
  console.dir(movies);
});
// Find all movies that have a credit cookie.
Movie.find({ hasCreditCookie: true }, function(err, movies) {
  if (err) return console.error(err);
  console.dir(movies);
});

*/

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