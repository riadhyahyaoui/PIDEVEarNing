

const router = require("express").Router();
const musicCtrl = require("../../controllers/music/musicCtrl");
const { check, Log,notReqAuthentication } = require('../../middleware/auth');

router.post('/UploadMusic',musicCtrl.UploadMusic);


router.post('/UploadMusic/:id',musicCtrl.UploadMusicID);
router.get('/fetchSharedMusic',musicCtrl.fetchSharedMusic);

router.post('/ShareMusic/:idMusic',musicCtrl.ShareMusic);
router.put('/pushView/:id',musicCtrl.pushView);
router.post('/pushView/:id/:idUser',musicCtrl.pushViewID);

router.get('/:trackID',musicCtrl.DownloadMusic);
router.get('/fetechMusicsDetails/:idUser',musicCtrl.fetechMusicsDetails);

router.get('/fetechMusic/:trackName',musicCtrl.fetechMusicByName);
router.put('/dislikeMusic/:userId/:musicId',Log,musicCtrl.dislikeMusic);
router.put('/likeMusic/:userId/:musicId',Log,musicCtrl.likeMusic);
router.delete('/deleteMusic/:id',Log,musicCtrl.deleteMusic);


module.exports = router;
