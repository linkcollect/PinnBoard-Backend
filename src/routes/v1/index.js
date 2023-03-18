const express = require('express');
const CompanyController = require('../../contollers/companyController');

const router = express.Router();

router.post("/createCompany",CompanyController.create);

module.exports = router;