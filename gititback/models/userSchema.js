/**
 * Created by thanaponsathirathiwat on 1/14/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    first: String,
    last: String,
    username: String,
    email: String,
    pass: String
});

module.exports = mongoose.model('users', userSchema);

