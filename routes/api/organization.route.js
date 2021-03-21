const router = require('express').Router();
const organizationCtrl =  require('../../controllers/organization.controller');
const auth = require('../../middlewares/jwt');


router.use(auth.jwt);
router.get('/:id', organizationCtrl.aLLOrganizations);
router.get('/one/:id', organizationCtrl.oneOrganizations);
router.post('/', organizationCtrl.newOrganizations);
router.put('/:id', organizationCtrl.updateOrganization);
router.delete('/:id', organizationCtrl.deleteOrganizations);

module.exports = router;