var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var itemSchema = new Schema({
	itemName: String,
    userame: String,
    isLost: {type: Boolean, default: true},
    email: String,
    phone: String,
    location: {latitude:Number, longitude:Number},
    date: Number,
    text: String,
    createdTime: {type: Number, default: Date.now},
    loggedinTime: {type: Number, default: null}
});

module.exports = mongoose.model('Items', itemSchema);
