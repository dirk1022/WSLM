var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WellSchema = new Schema({
	well_id : String,
	name : String,
	latitude : Number,
	longtitude : Number,
	geofence_radius_in_meters : Number,
	total_depth : Number,
	api_num : Number,
	monthly_product_num : Number
});

module.exports = mongoose.model('Well', WellSchema);