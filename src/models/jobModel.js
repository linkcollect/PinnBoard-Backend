const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({

    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    role: {
        type: String,
        required: true
    },
    payRange: {
        type: String,
        required: true,
    },
    jobDescription: {
        type: String,
        require: true
    },
    applyLink: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Job = mongoose.model('Job', JobSchema);
module.exports = Job;

