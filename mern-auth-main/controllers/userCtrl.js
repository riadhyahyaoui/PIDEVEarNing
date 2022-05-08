const User = require("../models/userModel");
const mongoose = require("mongoose");
var randomstring = require("randomstring");

const userCtrl = {
    findNewRequest: async (req, res) => {
     try {
        let idUser = mongoose.Types.ObjectId(req.params.id);
        console.log(idUser)
        UsersList = await User.find({ followers:{$not:{$eq:idUser}},_id:{$not:{$eq:idUser}}});
        
        res.status(200).json({ success: true, UsersList });
          
            } catch (err) {
            res.status(500).json(err.message);
        }
    },
    
    suggestions: async (req, res, next) => {
        let idUser = mongoose.Types.ObjectId(req.params.id);
        console.log(idUser)
        UsersList = await User.find({ _id:{$not:{$eq:idUser}}});
        
        res.status(200).json({ success: true, UsersList });
    
    
    },
    update: async (req, res, next) => {
        try {
    
            const { fullname, username, email, mobile, address, gender } = req.body;
            let newUserName = username.toLowerCase().replace(/ /g, "");
            let url = req.protocol + "://" + req.get("host");
      
          const userid = req.params.id;
          const foundUser = await User.findOne({ _id:userid});
            
    
          if (!foundUser) {
            return res.status(403).json({ error: 'User undefined' });
    
          }
          if (req.body.newpassword != req.body.confirmnewpassword) {
            return res.status(403).json({ error: 'check the passwords that you have entered' });
    
          }
          st = randomstring.generate();

          await foundUser.updateOne({
            fullname,
            username: newUserName,
            email,
            gender,
            mobile,
            address,
            secretToken: st,
          }, { new: true }
          );
          res.status(200).json({ foundUser });
    
        } catch (error) {
          next(error);
    
        }
    
      },
      
    follow: async (req, res, next) => {
        let x = mongoose.Types.ObjectId(req.params.follwingid);
        User.findByIdAndUpdate(req.params.followId, { $push: { following: x } }, { new: true },
            (err, result) => {
                if (err) {

                    return res.status(422).json({ error: err })
                }
            })
        User.findByIdAndUpdate(x, { $push: { followers: req.params.followId } }, { new: true },
            (err, result) => {
                if (err) {

                    return res.status(422).json({ error: err })
                }
            })
        return res.status(200).json({ msg: "success!" });
    },

    unfollow: async (req, res, next) => {
        let x = mongoose.Types.ObjectId(req.params.follwingid);
        User.findByIdAndUpdate(req.params.followId, { $pull: { following: x } }, { new: true },
            (err, result) => {
                if (err) {

                    return res.status(422).json({ error: err })
                }
            })
        User.findByIdAndUpdate(x, { $pull: { followers: req.params.followId } }, { new: true },
            (err, result) => {
                if (err) {

                    return res.status(422).json({ error: err })
                }
            })
        return res.status(200).json({ msg: "success!" });
    },

    getAll: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            if (!user) {
                res.status(400).json({ msg: "User does not exist." });
            }

            const followers = await Promise.all(
                user.followers.map((followerId) => {
                    return User.findById(followerId);
                })
            );
            const following = await Promise.all(
                user.following.map((followerId) => {
                    return User.findById(followerId);
                })
            );
            let friendList = [];
            followers.map((follower) => {
                const { _id, username ,email ,mobile} = follower;
                friendList.push({ _id, username ,email,mobile});
            });
            following.map((follows) => {
                const { _id, username ,email ,mobile} = follows;
                friendList.push({ _id, username ,email,mobile});
            });
            res.json({
                user: {
                  friendList,
                },
              });
        } catch (err) {
            res.status(500).json(err.message);
        }
    },
    getAll: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            if (!user) {
                res.status(400).json({ msg: "User does not exist." });
            }

            const followers = await Promise.all(
                user.followers.map((followerId) => {
                    return User.findById(followerId);
                })
            );
            const following = await Promise.all(
                user.following.map((followerId) => {
                    return User.findById(followerId);
                })
            );
            let friendList = [];
            followers.map((follower) => {
                const { _id, username ,email ,mobile} = follower;
                friendList.push({ _id, username ,email,mobile});
            });
            following.map((follows) => {
                const { _id, username ,email ,mobile} = follows;
                friendList.push({ _id, username ,email,mobile});
            });
            res.json({
                user: {
                  friendList,
                },
              });
        } catch (err) {
            res.status(500).json(err.message);
        }
    },
    getFollowers: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            if (!user) {
                res.status(400).json({ msg: "User does not exist." });
            }

            const followers = await Promise.all(
                user.followers.map((followerId) => {
                    return User.findById(followerId);
                })
            );
            let friendList = [];
            followers.map((follower) => {
                const { _id, username ,email ,mobile} = follower;
                friendList.push({ _id, username ,email,mobile});
            });

            res.json({
                user: {
                  friendList,
                },
              });        
            } catch (err) {
            res.status(500).json(err.message);
        }
    },
    
    desactivate: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            if (!user) {
                res.status(400).json({ msg: "User does not exist." });
            }

            else {
                user.delete();
                res.status(200).json("Account has been deleted");
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    getFollowing: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            if (!user) {
                res.status(400).json({ msg: "User does not exist." });
            }
            const following = await Promise.all(
                user.following.map((followerId) => {
                    return User.findById(followerId);
                })
            );


            let friendList = [];
            following.map((follows) => {
                const { _id, username } = follows;
                friendList.push({ _id, username });
            });

            res.json({
                user: {
                  friendList,
                },
              });        
            } catch (err) {
            res.status(500).json(err.message);
        }
    },

}; module.exports = userCtrl;
