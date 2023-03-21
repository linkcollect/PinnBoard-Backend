const Job = require('../models/jobModel');

class JobRepository {

    createJob = async(data) => {
        try {
            console.log(data);
            const job = await Job.create(data);
            return job;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = JobRepository;