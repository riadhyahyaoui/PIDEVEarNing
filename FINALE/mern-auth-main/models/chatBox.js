const mongoose =require ("mongoose");

const chatBoxSchema = mongoose.Schema({
    idUserSource: { type: String},
    idUserDestination: {type:String},
    content: {type:String,required:true},
    dateEnvoi: {type:Date,default:Date.now()},
    sourdine: {type:Boolean,default:false},
    seen : {type:Boolean,default:false}
});
const chatBox = mongoose.model("ChatBox", chatBoxSchema);
module.exports = chatBox;
