var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WellIncidentHistorySchema = new Schema({
	well_id : Number,
	incident_date : Date,
	incident_description : String
});

module.exports = mongoose
		.model('Well_Incident_History', WellIncidentHistorySchema);