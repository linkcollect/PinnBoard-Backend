const JobService = require('../services/jobService');
const jobService = new JobService();

const create = async(req, res) => {
    try {
       // console.log(req.body);
        const job = await jobService.create(req.body);
        return res.status(201).json({
            data: job,
            success: true,
            message: 'Successfully created a Job',
            err: {}
        });
        
    } catch (error) {
        return res.status(501).json({
            data:{},
            success:false,
            message : "Not able to create the Job",
            err:error.message

        })
    }
}

module.exports = {
    create
}