

const router = require("express").Router();
const reclamationCtrl = require("../../controllers/reclamation/reclamationCtrl");
const { check,Log, notReqAuthentication } = require('../../middleware/auth');

router.post('/add',Log,reclamationCtrl.addReclamation);
router.post('/add/:id',reclamationCtrl.addReclamationid);

router.get('/consultReclamation',Log,reclamationCtrl.consultReclamation);
router.get('/consultReclamation/:id',reclamationCtrl.consultReclamationid);

router.get('/OnlyDone',Log,reclamationCtrl.OnlyDone);
router.get('/OnlyDone/:id',reclamationCtrl.OnlyDoneid);



module.exports = router;
