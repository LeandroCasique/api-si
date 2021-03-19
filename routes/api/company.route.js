const router = require('express').Router();
const companyCtrl =  require('../../controllers/company.controller');
const auth = require('../../middlewares/jwt');


router.use(auth.jwt);
router.get('/', companyCtrl.allCompanies);
router.get('/:id', companyCtrl.oneCompany);
router.post('/', companyCtrl.newCompany);
router.put('/:id', companyCtrl.updateCompany);
router.delete('/:id', companyCtrl.deleteCompany);

module.exports = router;