const CompanyRepo = require('../repository/companyRepo');
const companyRepo = new CompanyRepo();


class CompanyService {
    create = async (data) => {
        try {
            console.log(data);
            const company = companyRepo.create(data);
            return company;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = CompanyService;