const router = require('express').Router();
const evenementController = require('../../controllers/event/evenement');
const cors= require('cors')
const { check, Log,notReqAuthentication } = require('../../middleware/auth');


// auth

router.use(cors())
router.post("/register",Log, evenementController.signUp);
router.get('/',Log, evenementController.getAllevenements);
router.get('/:id',Log, evenementController.evenementInfo);
router.put("/:id",Log, evenementController.updateevenement);
router.delete('/:id',Log, evenementController.deleteevenement)
router.put('/likeevenementModel/:evenementModelId',Log,evenementController.likeevenementModel);
router.put('/dislikeevenementModel/:evenementModelId',Log,evenementController.dislikeevenementModel);


module.exports = router;