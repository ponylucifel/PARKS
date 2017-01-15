/**
 * Created by thanaponsathirathiwat on 1/15/17.
 */
var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    res.render('dashboard', { title: 'Dashboard', username: req.body.username});
});

module.exports = router;
