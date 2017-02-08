var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WellDowntimeHistorySchema = new Schema({
	well_id : String,
	down_time : Number
});

module.exports = mongoose.model('Well_Downtime_History', WellDowntimeHistorySchema);