var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
	emp_id : Number,
	first_name : String,
	last_name : String
	//woc_wells :[{ type: Schema.Types.ObjectId, ref: 'wocWell' }]
});

module.exports = mongoose.model('employee', EmployeeSchema);