var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WocWellSchema = new Schema({
	wocWell_id : String,
	emp_id : String,
	// _emp : [{ type: Schema.Types.ObjectId, ref: 'Employee' }],
	well_id : String
});

module.exports = mongoose.model('woc_Well', WocWellSchema);