var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WellDailyActivitySchema = new Schema({
	well_id : Number,
	activity_id : Number,
	component_id : Number,
	activity_type_id : Number,
	planned_start_date_time: Date,
	planned_end_date_time: Date,
	actual_start_date_time: Date,
	actual_end_date_time: Date,
	po_id : String,
	status : String,
	planned_quantity : Number,
	duration_of_crew : Number,
	task_of_crew : Number
});

module.exports = mongoose.model('Well_Daily_Activity', WellDailyActivitySchema);