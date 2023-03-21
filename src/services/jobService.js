const JobRepository = require('../repository/jobsRepo');
const jobRepo = new JobRepository();

class JobService {
    create = async (data) => {
        try {
            const job = await jobRepo.createJob(data);
            return job;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = JobService;