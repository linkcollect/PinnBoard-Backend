const Company = require('../models/companyModel');

class CompanyRepository {
    create = async (data) => {
        try {
            console.log("in the repo layer");
            const company = await Company.create({
                Name: data.name,
                LogoLink: data.logoLink,
                Description: data.description,
                Location: data.location,
                Website: data.website
            });
            return company;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = CompanyRepository;