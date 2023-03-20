const express = require('express');
const CompanyController = require('../../contollers/companyController');


const router = express.Router();

router.post("/createCompany",CompanyController.create); // create


router.patch("/updateCompById/:id",CompanyController.updateById);
router.patch("/updateCompByName/:name",CompanyController.updateByName);

router.delete("/deleteById/:id",CompanyController.deleteById);
router.delete("/deleteByName/:name",CompanyController.deleteByName);

router.get("/getById/:id",CompanyController.getById);
router.get("/getByName/:name",CompanyController.getByName)



module.exports = router;