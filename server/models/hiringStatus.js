var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hiringStatusSchema = new Schema({
  StatusId: Number,
  StatusValue: String
});

var HiringStatus = mongoose.model('HiringStatus', hiringStatusSchema);
module.exports = HiringStatus;