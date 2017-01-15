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
	// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
	
	// first: String,
 //    last: String,
 //    username: String,
 //    email: String,
 //    pass: String

	// if(userModel.findOne({ email: req.body.email}))
	// {	
	// 		console.log('email found!');	

 //  if((userModel.find({ email: req.body.email})).where('password').equals(req.body.pass))
	// 	{
	// 			console.log('pass match %s', req.body.pass);
	// 			res.redirect('dashboard');
	// 	}
	// 	else
	// 	{
	// 		console.log('gtfo!');
	// 		res.render('login', { title: 'GIB Login', message:'Wrong password entered.'});
	// 	}

 //  console.log('connected!');
	// });


		// if((userModel.find({ email: req.body.email})).where('password').equals(req.body.pass))
		// {
		// 		console.log('pass match %s', req.body.pass);
		// 		res.redirect('dashboard');
		// }
		// else
		// {
		// 	console.log('gtfo!');
		// 	res.render('login', { title: 'GIB Login', message:'Wrong password entered.'});
		// }
	// }
	// else
	// {
	// 	console.log('%s cannot be found!', req.body.email);
	// }


// userModel.
// 	  find({ last: /String/ }).
// 	  where(req.body.username).equals('sad').
// 	  exec(callback);
console.log("username: %s",req.body.username );
console.log("pass    : %s",req.body.pass );

var cursor = userModel.find({ username: req.body.username , password: req.body.pass}).cursor(); //and

//.where(req.body.username).equals('String')

cursor.on('data', function(doc) {
  // Called once for every document
  //if found
  console.log(doc);

  if(doc.first) res.redirect('dashboard');

});
cursor.on('close', function() {
  // Called when done
  console.log("Not Found!");
  res.render('login', { title: 'GIB Login', message:'Wrong password entered.'});
});


});

module.exports = router;
