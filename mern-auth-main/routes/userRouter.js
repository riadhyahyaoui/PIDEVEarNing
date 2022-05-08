const router = require("express").Router();
const { get } = require("mongoose");
const userCtrl = require("../controllers/userCtrl");
const { check,Log, notReqAuthentication } = require('../middleware/auth');


router.post('/follow/:followId/:follwingid',userCtrl.follow);
router.post('/unfollow/:followId/:follwingid',userCtrl.unfollow);

router.get("/getFollowers/:id", userCtrl.getFollowers);
router.get("/getFollowing/:id",userCtrl.getFollowing);


router.get("/getAll/:id", userCtrl.getAll);


router.delete("/deleteUser/:id",userCtrl.desactivate);
router.put('/update/:id',userCtrl.update);
router.get("/suggestions/:id", userCtrl.suggestions);
router.get("/findNewRequest/:id", userCtrl.findNewRequest);


module.exports = router;
