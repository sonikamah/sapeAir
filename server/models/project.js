'use strict';
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var projectSchema = new schema({

  PID: {
    type: String,
    required: true,
    unique: true
  },
  EngagementName: String,
  ProjectName: String,
  ClientId: String,
  DL: String,
  Stage: String,
  Office: String,
  StartDate: Date,
  EndDate: Date,
  Probability: Number,
  CreatedOn: Date,
  UpdatedOn: Date
});

var Project = mongoose.model('Project', projectSchema);
module.exports = Project;