var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var candidateSchema = new Schema({
  JobId: {
    type: String,
    required: true
  },
  FirstName: {
    type: String,
    required: true
  },
  LastName: String,
  Email: {
    type: String,
    required: true,
    unique: true
  },
  NTID: String,
  OfferStatus: {
    type: Schema.ObjectId, 
    ref: 'HiringStatus'
  },
  CreatedBy: {
      type: Schema.ObjectId,
      ref: 'User'
    },
  CreatedOn: Date,
  UpdatedOn: Date
});

candidateSchema
  .virtual('CID')
  .get(function () {
    return this.id;
  });


var Candidate = mongoose.model('Candidate', candidateSchema);
module.exports = Candidate;