'use strict';

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var feedbackSchema = new schema({
  ForNTID: {
    type: Schema.ObjectId,
    ref: 'User',
  },
  ForCID: {
    type: Schema.ObjectId,
    ref: 'Candidate',
  },
  FeedbackDetails: [{
    PID: {
      type: Schema.ObjectId,
      ref: 'Project',
    },
    Delta: String,
    Positive: String,
    Type: Number,
    Category: {
      type: Schema.ObjectId,
      ref: 'Category',
    },
    Approver: {
      type: Schema.ObjectId,
      ref: 'User',
    },
    IsHidden: Boolean,
    IsDelta: Boolean,
    IsDeltaapproved: Boolean,
    IsFlagged: Boolean,
    CreatedOn: Date,
    CreatedBy: {
      type: Schema.ObjectId,
      ref: 'User'
    }
  }]
});

feedbackSchema
  .virtual('FeedbackId')
  .get(function () {
    return this.id;
  });

var Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;