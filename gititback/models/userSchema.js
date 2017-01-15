var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    first: String,
    last: String,
    username: String,
    email: String,
    phone: String,
    pass: String,
    itemLost: {type: Array, default: null}, 
    itemFound: {type: Array, default: null},
    createdTime: {type: Number, default: Date.now},
    loggedinTime: {type: Number, default: null},
    browser: {type: String, default: null},
    OS: {type: String, default: null},
    rank: {type: Number, default: 0}
});

module.exports = mongoose.model('users', userSchema);

