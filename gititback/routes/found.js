/**
 * Created by thanaponsathirathiwat on 1/14/17.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('index', { title: 'GitItBack' });
});

router.get('/', function(req, res, next) {

	http://domain.com/page?returnurl=%2Fadmin

//window.location.search.substr(1) // returnurl=%2Fadmin

var result = new Date('1980-05-21')

    res.render('found', { title: 'GIB Found Item' });
});


module.exports = router;