const mongoose = require("mongoose");

const File= new mongoose.Schema({

     shortId:{
         
        type:String,
        required:true,
        unique:true,
     },

    cloudinaryUrl:{
        type:String,
        required:true,
     },

     expiry:{

         type:Date,

     },

     createdAt:Date,
     

     updatedAt:Date,
})
module.exports = mongoose.model("File", File);