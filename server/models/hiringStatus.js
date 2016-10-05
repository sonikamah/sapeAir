'use strict';
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var hiringStatusSchema = new schema({
  StatusId: Number,
  StatusValue: String
});

var HiringStatus = mongoose.model('HiringStatus', hiringStatusSchema);
module.exports = HiringStatus;