var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
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
    NTId: {
        type: String,
        required: true,
        unique: true
    },
    OracleId: {
        type: String,
        required: true,
        unique: true
    },
    HomeOffice: String,
    CurrentOffice: String,
    StaffingPartner: String,
    StartDate: Date,
    PersonType: String,
    SeatNo: String,
    CreatedOn: Date,
    UpdatedOn: Date
});


var User = mongoose.model('User', userSchema);
module.exports = User;