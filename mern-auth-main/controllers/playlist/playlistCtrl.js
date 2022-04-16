const mongoose = require("mongoose");
const music = require("../../models/music");
const playlist = require("../../models/playlist");
const jwt_decode = require('jwt-decode');


const musicAdminCtrl = {

    CreateNewPlaylist: async (req, res) => {

        try {

            const token = req.cookies.access_token;
            decodedToken = jwt_decode(token);

            const newPlaylist = new playlist({
                idUser: mongoose.Types.ObjectId(decodedToken.sub),
                name: req.body.name,
                description: req.body.description,
            });

            await newPlaylist.save();


            res.json({
                msg: "Playlist has been Created !",
                Playlist: {
                    ...newPlaylist._doc,
                }
            });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }


    },
    fetechMyPlaylist: async (req, res) => {
        const token = req.cookies.access_token;
        decodedToken = jwt_decode(token);
        console.log(decodedToken.sub)
        await playlist.find({ idUser: decodedToken.sub })
            .then(data => {
                res.send({ playlists: data });
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving playlist."
                });
            });
    },

    AddMusicToMyPlaylist: async (req, res) => {
        try {
            const token = req.cookies.access_token;
            decodedToken = jwt_decode(token);

            console.log(decodedToken.sub)

            const MusicId = req.params.id;
            const PlaylistId = req.params.PlaylistId;

            const muzika = await music.findOne({ _id: MusicId });
            console.log("muzika")
            console.log(muzika)
            if (!muzika) {
                return res.status(400).json({ msg: "please check id" });
            }


            playlist.findByIdAndUpdate(PlaylistId, { $push: { music: muzika } }, { new: true },
                (err, result) => {
                    if (err) {

                        return res.status(422).json({ error: err })
                    }
                })

            res.json({
                msg: "music added !",
            });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }



    },
    AddMusicToMyPlaylistName: async (req, res) => {
        const token = req.cookies.access_token;
        decodedToken = jwt_decode(token);
        console.log(decodedToken.sub)
        await playlist.find({ idUser: decodedToken.sub })
            .then(data => {
                res.send({ name: data.name });
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving playlist."
                });
            });
    },
    fetechPlaylistByName: async (req, res) => { },

    deletePlaylist: async (req, res) => { },

}; module.exports = musicAdminCtrl;
