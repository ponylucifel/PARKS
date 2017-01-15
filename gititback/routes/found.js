/**
 * Created by thanaponsathirathiwat on 1/14/17.
 */

var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('found', { title: 'Found Item', username:req.body.username});
});

router.post('/', function(req, res, next){
    res.render('notify', { message: 'Your response has been submitted succesfully.  Thank you for being so kind.  We are one step closer to Utopia because of people like you.'})
});

module.exports = router;