/**
 * Created by thanaponsathirathiwat on 1/15/17.
 */
var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    setTimeout(function(){
        res.render('dashboard', { title: 'Dashboard' });
    }, 5000);

});