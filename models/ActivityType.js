var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivityTypeSchema = new Schema({
	activity_id : Number,
	activity_name : String,
	activity_description: String
});

module.exports = mongoose.model('activity_Type', ActivityTypeSchema);