var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComponentSchema = new Schema({
	component_id : Number,
	activity_type_id : String
});

module.exports = mongoose
		.model('ComponentSchema', ComponentSchema);