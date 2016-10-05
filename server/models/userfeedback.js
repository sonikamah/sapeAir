var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userFeedbackSchema = new Schema({
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