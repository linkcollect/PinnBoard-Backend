const CompanyRepo = require('../repository/companyRepo');
const companyRepo = new CompanyRepo();


class CompanyService {
    create = async (data) => {
        try {
            const company = await companyRepo.create(data);
            return company;
        } catch (error) {
            throw error;
        }
    }
    updateById = async(id,data) => {
        try {
           // console.log("Service",id);
            const company = await companyRepo.updatebyId(id,data);
            return company;
        } catch (error) {
            throw error;
        }
    }
    updateByName = async(name,data) => {
        try {
            const company = await companyRepo.updatebyName(name,data);
            return company;
        } catch (error) {
            //console.log(error);
            throw error;
        }
    }
    deleteByName = async(name)=>{
        try {

            const company = await companyRepo.deletebyName(name);
            return company;
        } catch (error) {
          //  console.log(error);
            throw error;
        }
    }
    deleteById = async(id)=>{
        try {
            const company = await companyRepo.deletebyId(id);
            return company;
        } catch (error) {
          //  console.log(error);
            throw error;
        }
    }
    getJobs = async(id) => {
        try {
            const jobs = await companyRepo.getwithJob(id);
            return jobs;
        } catch (error) {
            throw error;
        }
    }
    getByName = async(name)=>{
        try {
            const company =  await companyRepo.getbyName(name);
            return company;
        } catch (error) {
            //console.log(error);
            throw error;
        }
    }
    getById = async(id)=>{
        try {
            const company = companyRepo.getbyId(id);
            return company;
        } catch (error) {
           // console.log(error);
            throw error;
        }
    }
}
module.exports = CompanyService;