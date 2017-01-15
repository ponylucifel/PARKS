var express = require('express');
var router = express.Router();
var userModel = require('../models/userSchema');
var itemModel = require('../models/itemSchema');

var myJsonArray = []
var myRankArray = []
/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('index', { title: 'returnto.me' });
});

router.get('/', function(req, res, next) {
    console.log(req.body);
    res.render('login', { title: 'Login', message:''});
});

router.post('/', function(req, res, next) {
    userModel.findOne({username: req.body.username}, "pass", function(err, user){
	if ((user==null)||(user.pass != req.body.pass)) {
		console.log("Failed to log in")
		res.render('login', {title:'Login', message:'Wrong email/password entered.'})
	}
	else {

			//Extract user data to show in dashBoard:

			//function doThisFirst(req) {
					//container for Item Lose query result
					//var myJsonArray = []
					
					console.log("myName : %s",req.body.username)
					cursor = itemModel.find({username: req.body.username}).cursor();	//all items related to username
					cursor.on('data', function(doc) {
					  // Called once for every document
					  console.log(doc)
					  JSON.stringify(doc)			
					  myJsonArray.push(doc)		//join all json into array "result from query"
					  console.log("myITEMS : %s",myJsonArray)	
					});
					cursor.on('close', function() {
					  // Called when done
					});


					//container for Ranking query result
					//var myRankArray = []
					
					cursor = userModel.find({username: req.body.username}).cursor();	//will get based on ranking
					cursor.on('data', function(doc) {
					  // Called once for every document
					console.log(doc)
					JSON.stringify(doc)			
					myRankArray.push(doc)		//join all json into array "result from query"
					console.log("myRANK : %s",myRankArray)	
					});
					cursor.on('close', function() {
					  // Called when done
					});
				//}
				// function flashThis(){
				// 		myJsonArray = []
				// 		myRankArray = []
						
				// 		doThisFirst()
				// }
				// flashThis()

				//doThisFirst()

				var myJsonString = JSON.stringify(myRankArray)
				console.log("myJSONSTRING %s",myJsonString)

				/////////////////////////////////////////////////////////


		console.log("user has logged in successfully!")
		res.render('dashboard', {title: 'Dashboard', username: req.body.username});
	}
    })
});

module.exports = router;
