

const router = require("express").Router();
const reclamationAdminCtrl = require("../../controllers/reclamation/reclamationAdminCtrl");
const { check, notReqAuthentication } = require('../../middleware/auth');

router.get('/getAllReclamation',reclamationAdminCtrl.getAllReclamation);
router.put('/doneReclamation/:id',reclamationAdminCtrl.doneReclamation);

module.exports = router;
