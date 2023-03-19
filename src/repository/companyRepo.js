const Company = require('../models/companyModel');

class CompanyRepository {
    create = async (data) => {
        try {
            const company = await Company.create({
                Name: data.name,
                LogoLink: data.logoLink,
                Description: data.description,
                Location: data.location,
                Website: data.website
            });
            return company;
        } catch (err) {
            throw new Error(`Error Creating Company : ${err.message}`);
        }
    }
    updatebyId = async (id, data) => {
        try {
           // console.log("Service",id);
            const company = await Company.findByIdAndUpdate(id, data, { new: true });
            if (!company) throw Error("Company not found");
            return company;
        } catch (error) {
            throw new Error(`Error Updating Company by ID: ${error.message}`);
        }
    }
    updatebyName = async (name, data) => {
        try {
            const company = await Company.findOneAndUpdate({
                Name: name
            }, data, { new: true });
           // console.log(company);
            if (!company) {
                throw Error("Company not found");
            } 
            return company;
        } catch (error) {
            throw new Error(`Error Updating Company by Name: ${error.message}`);
        }
    }
    deletebyId = async (id) => {
        try { 
            const company = await Company.findByIdAndRemove(id);
            if (!company) throw Error("Company not found");
            return `Successfully deleted the company ${company}`;
        } catch (error) {
            throw new Error(`Error Deleting Company by ID: ${error.message}`);
        }
    }
    deletebyName = async (name) => {
        try {
            const company = await Company.findOneAndRemove({
                Name: name
            });
            if (!company) throw  Error("Company not found");
            return `Successfully deleted the company ${company}`;
        } catch (error) {
            throw new Error(`Error Deleting Company by Name: ${error.message}`);
        }
    }
    getbyId = async (id) => {
        try {
            const company = await Company.findById(id).lean();
            if (!company) throw Error("Company not found");
            return company;
        } catch (error) {
            throw new Error(`Error getting Company by Name: ${error.message}`);
        }
    }
    getbyName = async (name) => {
        try {
            const company = await Company.findOne({ Name: name }).lean();
            //console.log(company);
           if (!company) throw Error("Company not found");
            return company;
        } catch (error) {
            throw new Error(`Error getting Company by Name: ${error.message}`);
        }
    }
}

module.exports = CompanyRepository;