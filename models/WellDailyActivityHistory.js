var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WellDailyActivityHistorySchema = new Schema({
	activity_id : Number,
	well_id : Number,
	activity_type_id : Number,
	planned_start_date : Date,
	planned_end_date : Date
});

module.exports = mongoose
		.model('Well_daily_activity_history', WellDailyActivityHistorySchema);