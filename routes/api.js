const router = require('express').Router();
const apiUserRouter = require('./api/user.route');
const apiCompanyRouter = require('./api/company.route');

router.use('/users', apiUserRouter);
router.use('/companies', apiCompanyRouter);

module.exports = router;