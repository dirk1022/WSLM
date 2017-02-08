var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComponentTypeSchema = new Schema({
	component_id : Number,
	component_name : String,
	default_quantity : String,
	uom : String,
	description : String
});

module.exports = mongoose.model('ComponentTypeSchema', ComponentTypeSchema);