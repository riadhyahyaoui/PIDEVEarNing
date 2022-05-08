
const router = require("express").Router();
const authAdminCtrl = require('../controllers/authAdminCtrl');
const { check, notReqAuthentication } = require('../middleware/auth');





router.route('/superadmin/addadmin').post(authAdminCtrl.addAdmin);
router.route('/superadmin/alladmins').get(authAdminCtrl.allAdmins);
router.route('/superadmin/allusers').get(authAdminCtrl.allUsers);
router.route('/superadmin/makeUser').post(authAdminCtrl.makeUser);
router.route('/superadmin/makeAdmin').post(authAdminCtrl.makeAdmin);
router.get("/superadmin/getAllUser", authAdminCtrl.getAll);
router.post("/superadmin/ban", authAdminCtrl.banUser);

router.route('/superadmin/unban').post(authAdminCtrl.unbanUser);

module.exports = router;
