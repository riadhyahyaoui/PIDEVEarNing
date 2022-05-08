const mongoose = require("mongoose");
const music = require("../../models/music");
const User = require("../../models/userModel");
const comment = require("../../models/comment");
const lyrics = require("../../models/lyrics");
const playlist = require("../../models/playlist");

const jwt_decode = require('jwt-decode');

const multer = require('multer');
const { GridFSBucket } = require('mongodb')
const { Readable } = require('stream');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const { getConnection } = require('./getConnexion')


// const storage = multer.diskStorage({
   
//     filename : function(req,file,cb){
//         musicName=file.originalname;
//         cb(null,  musicName);
//     }
//   })
  
//   const upload = multer({storage: storage});
const musicCtrl = {


   
    //webscrapping
    pushView: async (req, res) => {

        const MusicId = req.params.id;
        const token = req.cookies.access_token;
        decodedToken = jwt_decode(token);

        let x = mongoose.Types.ObjectId(decodedToken.sub);
        console.log("MusicId:"+MusicId)

        foundMusic = await music.findOne({ _id: MusicId});
        if (!foundMusic) {
            res.status(400).json({ msg: "Music does not exist." });
        }    


        music.findOne({ _id: MusicId }).find(null,  function (err, result) {
                i = result.length - 1;
            if(result[i].listViews.length==0)
            {
                music.findByIdAndUpdate(MusicId,{ $inc: { views:1 }}, { new: true },
                    (err, result) => {
                        if (err) {
                            
                            return res.status(422).json({ error: err })
                        }
                    })
               
                music.findByIdAndUpdate(MusicId, { $push: { listViews: x } }, { new: true },
                                (err, result) => {
                                    if (err) {
                                        return res.status(422).json({ error: err })
                                    }
                                })
            }
            else
            {
                lg=result.length-1;
               
                for (var i = 0, n= result[lg].listViews.length; i<n; i++) 
                {                
                    val = mongoose.Types.ObjectId( result[lg].listViews[i]);
                   
                    if(Object.is(val.toString(),x.toString()))
                    {
                      
                        return res.status(422).json({ msg: "deja vu!" })

                    }
                    else {
                       
                        music.findByIdAndUpdate(MusicId, { $push: { listViews: x }}, { new: true },
                            (err, result) => {
                                if (err) {
                                    return res.status(422).json({ error: err })
                                }
                            })
                    }
               
           }
        }

        return res.status(422).json({ msg: "Succes!" })

        });

        
    },
    pushViewID: async (req, res) => {

        const MusicId = req.params.id;
        const UserId = req.params.idUser;
        
        console.log("MusicId:"+MusicId)
        console.log("idUser:"+UserId)

        foundMusic = await music.findOne({ _id: MusicId});
        if (!foundMusic) {
            res.status(400).json({ msg: "Music does not exist." });
        }    


        music.findOne({ _id: MusicId }).find(null,  function (err, result) {
                i = result.length - 1;
            if(result[i].listViews.length==0)
            {
                music.findByIdAndUpdate(MusicId,{ $inc: { views:1 }}, { new: true },
                    (err, result) => {
                        if (err) {
                            
                            return res.status(420).json({ error: err })
                        }
                    })
               
                music.findByIdAndUpdate(MusicId, { $push: { listViews: UserId } }, { new: true },
                                (err, result) => {
                                    if (err) {
                                        return res.status(422).json({ error: err })
                                    }
                                })
            }
            else
            {
                lg=result.length-1;
               
                for (var i = 0, n= result[lg].listViews.length; i<n; i++) 
                {                
                    val = mongoose.Types.ObjectId( result[lg].listViews[i]);
                   
                    if(Object.is(val.toString(),UserId.toString()))
                    {
                      
                        return res.status(422).json({ msg: "deja vu!" })

                    }
                    else {
                       
                        music.findByIdAndUpdate(MusicId, { $push: { listViews: UserId }}, { new: true },
                            (err, result) => {
                                if (err) {
                                    return res.status(422).json({ error: err })
                                }
                            })
                    }
               
           }
        }

        return res.status(200).json({ msg: "Succes!" })

        });

        
    },


    ShareMusic: async (req, res, next) => {
        foundMusic = await music.findOne({ _id: req.params.idMusic });
        await foundMusic.updateOne({
            "shared":true
        }, { new: true }
        );
        res.status(200).json({ msg: "Music Shared with others Users" });

    },
    
    fetchSharedMusic: async (req, res) => {
        try {
            MusicList = await music.find({shared:true});
            
              if (MusicList.length==0) {
                return res.status(400).json({ msg: "Music List is empty " });
              }
              else{
                res.json({
                    music:MusicList
                  });
                 
              }
             
            } catch (err) {
              return res.status(500).json({ msg: err.message });
            }
          },
    fetechMusicsDetails: async (req, res) => {
    try {
        MusicList = await music.find({postedby: req.params.idUser});
        
          if (MusicList.length==0) {
            return res.status(400).json({ msg: "Music List is empty " });
          }
          else{
            res.json({
                music:MusicList
              });
             
          }
         
        } catch (err) {
          return res.status(500).json({ msg: err.message });
        }
      },

    likeMusic: async (req, res) => {
        let x = mongoose.Types.ObjectId(req.params.userId);
        const user = await User.findById(req.params.userId)
        if (!user) {
            res.status(400).json({ msg: "User does not exist." });
        }
        music.findByIdAndUpdate(req.params.musicId, { $push: { likes: x } }, { new: true },
            (err, result) => {
                if (err) {
                    return res.status(422).json({ error: err })
                }
            })
            music.findByIdAndUpdate(req.params.musicId, { $pull: { dislikes: x } }, { new: true },
                (err, result) => {
                    if (err) {
                        return res.status(422).json({ error: err })
                    }
                })
        return res.status(200).json({ msg: "success!" });
    },
    dislikeMusic: async (req, res) => {
        let x = mongoose.Types.ObjectId(req.params.userId);
        const user = await User.findById(req.params.userId);
        if (!user) {
            res.status(400).json({ msg: "User does not exist." });
        }
        music.findByIdAndUpdate(req.params.musicId, { $push: { dislikes: x } }, { new: true },
            (err, result) => {
                if (err) {
                    return res.status(422).json({ error: err })
                }
            })
            music.findByIdAndUpdate(req.params.musicId, { $pull: { likes: x } }, { new: true },
                (err, result) => {
                    if (err) {
                        return res.status(422).json({ error: err })
                    }
                })
        return res.status(200).json({ msg: "success!" });
    },
    fetechMusicByName : async (req, res) => {
        try {
    
         const musika = await music.find({ name: req.params.trackName});
            console.log(musika)
          if (musika.length==0) {
            return res.status(400).json({ msg: "Track Name Invalid" });
          }
         
            music.find({ name: req.params.trackName }, function (err, musika) {
                var trackID = mongoose.Types.ObjectId(musika[0].mp3);
                res.set('content-type', 'audio/mp3');
                res.set('accept-ranges', 'bytes');
                const db = getConnection();

                let bucket = new mongodb.GridFSBucket(db, {
                    bucketName: 'tracks'
                });
                let downloadStream = bucket.openDownloadStream(trackID);

                downloadStream.on('data', (chunk) => {
                    res.write(chunk);
                });

                downloadStream.on('error', () => {
                    res.sendStatus(404);
                });

                downloadStream.on('end', () => {
                    res.end();
                });
            });
          
   
         
        } catch (err) {
          return res.status(500).json({ msg: err.message });
        }
      },
   
    DownloadMusic: async (req, res) => {

        try {

            var trackID = new ObjectID(req.params.trackID);
        } catch (err) {
            return res.status(400).json({ message: "Invalid trackID in URL parameter. Must be a single String of 12 bytes or a string of 24 hex characters" });
        }
        res.set('content-type', 'audio/mp3');
        res.set('accept-ranges', 'bytes');
        const db = getConnection();

        let bucket = new mongodb.GridFSBucket(db, {
            bucketName: 'tracks'
        });

        let downloadStream = bucket.openDownloadStream(trackID);

        downloadStream.on('data', (chunk) => {
            res.write(chunk);
        });

        downloadStream.on('error', () => {
            res.sendStatus(404);
        });

        downloadStream.on('end', () => {
            res.end();
        });
    },
    UploadMusic: async (req, res,file) => {

        try {

            const storage = multer.diskStorage({
   
                filename : function(req,file,cb){
                    musicName=file.originalname;
                    cb(null,  musicName);
                }
              })
            const upload = multer({ storage: storage, limits: { fields: 6, fileSize: 6000000, files: 6, parts: 6 } });
            upload.single('track')(req, res, (err) => {
                if (err) {
                    return res.status(400).json({ message: "Upload Request Validation Failed" });
                } 

                let trackName = musicName;
                console.log(musicName)
                // Covert buffer to Readable Stream
                const readableTrackStream = new Readable();
                readableTrackStream.push(req.file.buffer);
                readableTrackStream.push(null);
                const db = getConnection();

                let bucket = new mongodb.GridFSBucket(db, {
                    bucketName: 'tracks',
                });

                let uploadStream = bucket.openUploadStream(trackName);
                this.id = uploadStream.id;
                const token = req.cookies.access_token;
                decodedToken = jwt_decode(token);
                const newMusic = new music({
                    name: musicName,
                    artistName: req.body.artistName,
                    genre: req.body.genre,
                    duration: 0,
                    description: req.body.description,
                    mp3: mongoose.Types.ObjectId(uploadStream.id),
                    postedby: decodedToken.sub,
                    shared: false,

                });
                newMusic.save();
                console.log("true")
                res.json({
                    msg: "music added !",

                    music: {
                        ...newMusic._doc,
                    }
                });
                readableTrackStream.pipe(uploadStream);

            });






        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    UploadMusicID: async (req, res,file) => {

        try {

            const storage = multer.diskStorage({
   
                filename : function(req,file,cb){
                    musicName=file.originalname;
                    cb(null,  musicName);
                }
              })
            const upload = multer({ storage: storage, limits: { fields: 6, fileSize: 6000000, files: 6, parts: 6 } });
            upload.single('track')(req, res, (err) => {
                if (err) {
                    return res.status(400).json({ message: "Upload Request Validation Failed" });
                } 

                let trackName = musicName;
                console.log(musicName)
                // Covert buffer to Readable Stream
                const readableTrackStream = new Readable();
                readableTrackStream.push(req.file.buffer);
                readableTrackStream.push(null);
                const db = getConnection();

                let bucket = new mongodb.GridFSBucket(db, {
                    bucketName: 'tracks',
                });

                let uploadStream = bucket.openUploadStream(trackName);
                this.id = uploadStream.id;
                
                const newMusic = new music({
                    name: musicName,
                    artistName: req.body.artistName,
                    genre: req.body.genre,
                    duration: 0,
                    description: req.body.description,
                    mp3: mongoose.Types.ObjectId(uploadStream.id),
                    postedby: req.params.id,
                    shared: false,

                });
                newMusic.save();
                console.log("true")
                res.json({
                    msg: "music added !",

                    music: {
                        ...newMusic._doc,
                    }
                });
                readableTrackStream.pipe(uploadStream);

            });






        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    
    
    deleteMusic: async (req, res) => {
        try {
            const Music = await music.findById(req.params.id)
            if (!Music) {
                res.status(400).json({ msg: "Music does not exist." });
            }
            else {
                music.findOne({ _id: req.params.id }).find(null, function (err, resuslt) {
                    if (err) { throw err; }
                    // for (var i = 0, l = resuslt.length; i < l; i++) 
                    // {   
                    i = resuslt.length - 1;
                    console.log("i : " + i)
                    for (var j = 0, n = resuslt[i].comments.length; j < n; j++) {
                        comment.findByIdAndRemove(resuslt[i].comments[j]._id)
                    }
                    for (var j = 0, n = resuslt[i].lyrics.length; j < n; j++) {
                        lyrics.findByIdAndRemove(resuslt[i].lyrics[j]._id)
                    }
                   
                    playlist.find(null, function (err, playlistRes) {
                        for (var i = 0, l = playlistRes.length; i < l; i++) {

                            playlist.findByIdAndUpdate(playlistRes[i]._id, { $pull: { music: req.params.id } }, { new: true },
                                (err) => {
                                    if (err) {
                                        return res.status(422).json({ error: err })
                                    }
                                })
                        }
                        console.log(playlistRes)
                    })
                    // }
                });
                Music.delete();
                res.status(200).json("Music has been deleted");
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}; module.exports = musicCtrl;
