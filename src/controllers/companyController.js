const CompanyService = require('../services/companyService');
const companyService = new CompanyService();


const create = async(req, res) => {
    try {
       // console.log(req.body);
        const company = await companyService.create(req.body);
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
            err:error.message

        })
    }
}

const updateById = async(req,res) =>{
    try {
        //console.log("controller",req.params.id);
        const company = await companyService.updateById(req.params.id,req.body);
        return res.status(201).json({
            data: company,
            success: true,
            message: 'Successfully updated a Company',
            err: {}
        });
        
    } catch (error) {
        return res.status(501).json({
            data:{},
            success:false,
            message : "Not able to updated the Company",
            err:error.message

        })
    }
}

const updateByName = async(req,res) =>{
    try {
       // console.log("Contoller",req.params.name);
        const company = await companyService.updateByName(req.params.name,req.body);
        return res.status(201).json({
            data: company,
            success: true,
            message: 'Successfully updated a Company',
            err: {}
        });
        
    } catch (error) {
        return res.status(501).json({
            data:{},
            success:false,
            message : "Not able to updated the Company",
            err:error.message

        })
    }
}
const deleteById = async(req,res) => {
    try {
        // console.log("Contoller",req.params.name);
         const company = await companyService.deleteById(req.params.id);
         return res.status(201).json({
             data: company,
             success: true,
             message: 'Successfully deleted a Company',
             err: {}
         });
         
     } catch (error) {
         return res.status(501).json({
             data:{},
             success:false,
             message : "Not able to delete the Company",
             err:error.message
 
         })
     }
}
const deleteByName = async(req,res) => {
    try {
         const company = await companyService.deleteByName(req.params.name);
         return res.status(201).json({
             data: company,
             success: true,
             message: 'Successfully deleted a Company',
             err: {}
         });
         
     } catch (error) {
         return res.status(501).json({
             data:{},
             success:false,
             message : "Not able to delete the Company",
             err:error.message
 
         })
     }
}

const getByName = async(req,res) => {
    try {
        // console.log("Contoller",req.params.name);
         const company = await companyService.getByName(req.params.name);
         return res.status(201).json({
             data: company,
             success: true,
             message: 'Successfully fetched a Company',
             err: {}
         });
         
     } catch (error) {
      //  console.log(error);
         return res.status(501).json({
             data:{},
             success:false,
             message : "Not able to fetch the Company",
             err: error.message
 
         })
     }
}
const getJobs = async(req,res) => {
    try {
        // console.log("Contoller",req.params.name);
         const job = await companyService.getJobs(req.params.id);
         return res.status(201).json({
             data: job,
             success: true,
             message: 'Successfully fetch jobs',
             err: {}
         });
         
     } catch (error) {
         return res.status(501).json({
             data:{},
             success:false,
             message : "Not able to fetch jobs of the corresponing company",
             err:error.message
 
         })
     }
}
const getById = async(req,res) => {
    try {
        // console.log("Contoller",req.params.name);
         const company = await companyService.getById(req.params.id);
         return res.status(201).json({
             data: company,
             success: true,
             message: 'Successfully fetched a Company',
             err: {}
         });
         
     } catch (error) {
         return res.status(501).json({
             data:{},
             success:false,
             message : "Not able to fetch the Company",
             err:error.message
 
         })
     }
}
module.exports = {
    create,
    updateById,
    updateByName,
    deleteById,
    deleteByName,
    getById,
    getByName,
    getJobs
}