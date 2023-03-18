const CityService = require('../services/companyService');
const cityService = new CityService();


const create = async(req, res) => {
    try {
        console.log(req.body);
        const company = await cityService.create(req.body);
        return res.status(201).json({
            data: company,
            success: true,
            message: 'Successfully created a Company',
            err: {}
        });
        
    } catch (error) {
        return res.status(501).json({
            data:{},
            success:false,
            message : "Not able to create the Company",
            err:error

        })
    }
}
module.exports = {
    create
}