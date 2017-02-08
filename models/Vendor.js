var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VendorSchema = new Schema({
	vendor_id : Number,
	vendor_name : String
});

module.exports = mongoose
		.model('VendorSchema', VendorSchema);