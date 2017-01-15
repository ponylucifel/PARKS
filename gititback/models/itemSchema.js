var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var itemSchema = new Schema({
    user: {name: String, email: String},
    createdTime: {type: Number, default: Date.now},
    loggedinTime: {type: Number, default: null},
    description: {location: {latitude:Number, longitude:Number},
	    date:Number, text:String}
});

module.exports = mongoose.model('Items', itemSchema);
