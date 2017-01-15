/**
 * Created by thanaponsathirathiwat on 1/15/17.
 */

var express = require('express');
var router = express.Router();
var userModel = require('../models/userSchema');


router.get('/', function(req, res, next) {
    console.log(req.body);
    res.render('logout', { title: 'logout', message:''});
});


module.exports = router;