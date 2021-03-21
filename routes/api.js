const router = require('express').Router();
const apiUserRouter = require('./api/user.route');
const apiCompanyRouter = require('./api/company.route');
const apiOrganizations = require('./api/organization.route');

router.use('/users', apiUserRouter);
router.use('/companies', apiCompanyRouter);
router.use('/organizations', apiOrganizations);

module.exports = router;