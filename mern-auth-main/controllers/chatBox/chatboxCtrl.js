
const chatBox = require("../../models/chatBox");

const jwt_decode = require('jwt-decode');

const musicCtrl = {

    //webscrapping
    //fetechMusic: async (req, res) => {},

    SendMessage: async (req, res) => { 
        const token = req.cookies.access_token;
        decodedToken = jwt_decode(token);
        console.log(decodedToken.sub)
        const newchatBox = new chatBox({
                    idUserSource: decodedToken.sub,
                    idUserDestination: req.params.idUserDestination,
                    content:req.body.content
                });
                await newchatBox.save();

                res.json({
                    msg: "Message Sended Successfully!",
                    
                    chat: {
                      ...newchatBox._doc,
                    }
                  });
            
          
    },
    GetAllMessages: async (req, res) => { 
        const token = req.cookies.access_token;
        decodedToken = jwt_decode(token);

    chatBox.find({idUserSource:decodedToken.sub},function(err,data){
        res.json(data)
    });

    },
    fetchConversation: async (req, res) => {

    },
    makeSourdine: async (req, res) => {
        const token = req.cookies.access_token;
        decodedToken = jwt_decode(token);
            Msg = await chatBox.findOne({ idUserSource:decodedToken.sub,idUserDestination:req.params.id });
            await Msg.updateOne({
                "sourdine": true
            }, { new: true }
            );
            res.status(200).json({ msg: "You message has been archived" });
    
        
    }


}; module.exports = musicCtrl;

// var express = require('express');
// var router= express.Router();
// const app = express();
// var chatBox= require('../models/chatBox');

// router.get(path='/get',function(req,res,next){
//     chatBox.find(function(err,data){
//         res.json(data)
//     });
// });
// router.post('/add/:idUserSource/:idUserDestination', function(req, res, next) {
//  new chatBox({

//         idUserSource:  req.params.idUserSource,
//         idUserDestination: req.params.idUserDestination,
//         content:req.body.content
//     })
//     .save((err,newchatBox)=>{
//         if (err)
//         console.log("error message : "+err); else{
//         console.log(newchatBox);
//         res.json(" : chatBox :" + newchatBox._id +" added");
//         }
//         }
//         );})
    
//  /*delete*/
//  router.post('/delete/:id',function(req,res,next){
//     chatBox.findByIdAndRemove(req.params.id,function(err,docs)
//     {
//         if(err)
//             console.log(err);
//             res.send("chatBox deleted")

//     })

//     })

  
//     /* update*/
//     router.put("/update/:id", async (req, res) => {
//         try {
//           const updatedchatBox = await chatBox.findByIdAndUpdate(
//             req.params.id,
//             {$set: req.body},{ new: true }
//           );
//           res.status(200).json(updatedchatBox);
//         } catch (err) {
//           res.status(500).json(err);
//         }
//       });
    


// module.exports = router; 
