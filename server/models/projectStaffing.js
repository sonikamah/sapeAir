'use strict';
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var projectStaffingSchema = new schema({
  NTID: {
    type: Schema.ObjectId,
    ref: 'User',
  },
  PID: {
    type: Schema.ObjectId,
    ref: 'Project',
  },
  TeamRole: String,
  Commitment: Number,
  Startdate: Date,
  Enddate: Date,
  CreatedOn: Date,
  UpdatedOn: Date
});

var ProjectStaffing = mongoose.model('ProjectStaffing', projectStaffingSchema);
module.exports = ProjectStaffing;