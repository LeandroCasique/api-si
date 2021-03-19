const router = require('express').Router();
const userCtrl =  require('../../controllers/user.controller');

router.post('/sing-up', userCtrl.singUp);
router.post('/login', userCtrl.login);

module.exports = router;