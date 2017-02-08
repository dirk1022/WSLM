var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VendorPoRatingSchema = new Schema({
	vendor_id : Number,
	vendor_po : Number,
	rating : String
});

module.exports = mongoose.model('Vendor_Po_Rating', VendorPoRatingSchema);