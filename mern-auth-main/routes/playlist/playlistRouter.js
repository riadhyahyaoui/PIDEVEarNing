const router = require("express").Router();
const playlistCtrl = require("../../controllers/playlist/playlistCtrl");
const { check, Log ,notReqAuthentication} = require('../../middleware/auth');



router.post('/CreateNewPlaylist',Log,playlistCtrl.CreateNewPlaylist);
router.put('/AddMusicToMyPlaylist/:id/:PlaylistId',Log,playlistCtrl.AddMusicToMyPlaylist);
router.delete('/deletePlaylist/:id',Log,playlistCtrl.deletePlaylist);
router.get('/fetechMyPlaylist',Log,playlistCtrl.fetechMyPlaylist);
router.delete('/deletePlaylist',Log,playlistCtrl.deleteAll);
router.get('/fetechPlaylistByName/:playlistName',Log,playlistCtrl.fetechPlaylistByName); 

//manqué 
router.put('/updateMyPlaylist/:id',Log,playlistCtrl.updateMyPlaylist); // manqué

module.exports = router;

