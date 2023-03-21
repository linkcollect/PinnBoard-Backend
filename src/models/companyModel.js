const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    Name: {
        type: String,
        unique: true
    },
    LogoLink: {
        type: String
    },
    Description: {
        type: String
    },
    Website: {
        type: String
    },
    Location: {
        type: String
    },
    Jobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job"
    }]

}, { timestamps: true });

const Company = mongoose.model('Company', companySchema);
module.exports = Company;