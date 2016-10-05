var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectStaffingSchema = new Schema({
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