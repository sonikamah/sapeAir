'use strict';
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userFeedbackSchema = new schema({
  NTId: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  FeedbackId: {
    type: Schema.ObjectId,
    ref: 'Feedback'
  }
});

var UserFeedback = mongoose.model('UserFeedback', userFeedbackSchema);
module.exports = UserFeedback;