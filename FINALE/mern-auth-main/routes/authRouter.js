const { check, notReqAuthentication,Log } = require('../middleware/auth');
const router = require("express").Router();
const authCtrl = require("../controllers/authCtrl");
const passport = require("passport"); require('../passport.js');
const multer = require("multer");

// const MIME_TYPE = {
//     "image/png": "png",
//     "image/jpeg": "jpg",
//     "image/jpg": "jpg",
//   };
//   const storage = multer.diskStorage({
//     // destination
//     destination: (req, file, cb) => {
//       const isValid = MIME_TYPE[file.mimetype];
//       let error = new Error("Mime type is invalid");
//       if (isValid) {
//         error = null;
//       }
//       //Affecter la destination
//       cb(null, "public/uploads/images");
//     },
//    //file name
//     filename: (req, file, cb) => {
//       const name = file.originalname.toLowerCase().split(" ").join("-");
//       const extension = MIME_TYPE[file.mimetype];
//       const imgName = name + "-" + Date.now() + "--" + "." + extension;
//       //Affecter file name
//       cb(null, imgName);
//     },
//   });

const storage = multer.diskStorage({
  destination: function(req,file,cb){
      cb(null,'./uploads');
  },
  
  filename : function(req,file,cb){
      imageName=req.body.date_debut+"-"+file.originalname;
      cb(null,  imageName);
  }
})

const upload = multer({storage: storage});

router.put("/activate/:secretToken", authCtrl.activate);
router.post('/forget',notReqAuthentication, authCtrl.forget);
router.post('/reset/:Passwordtoken', authCtrl.resetPassword);
router.post("/refresh_token", authCtrl.generateAccessToken);
router.post("/register",notReqAuthentication,  multer({ storage: storage }).single("img"), authCtrl.register);
router.post("/login", notReqAuthentication, authCtrl.login);
router.post("/logout",Log, authCtrl.logout);
router.get("/check", authCtrl.check);





module.exports = router;
