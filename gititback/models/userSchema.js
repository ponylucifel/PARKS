var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    first: String,
    last: String,
    username: String,
    email: String,
    phone: String,
    pass: String,
    createdTime: {type: Number, default: Date.now},
    loggedinTime: {type: Number, default: null},
    browser: {type: String, default: null},
    OS: {type: String, default: null}
});

module.exports = mongoose.model('users', userSchema);

