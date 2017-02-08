var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PurchaseOrderSchema = new Schema({
	po_id : String,
	po_attachement : String,
	po_ets : Date,
	vendor_id : Number,
	sign_off_status : String,
	not_sign_off_reason : String,
});

module.exports = mongoose.model('Purchase_Order', PurchaseOrderSchema);