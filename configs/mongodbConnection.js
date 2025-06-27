const mongoose= require("mongoose");

const connectDB= async()=>{

     try{

         await mongoose.connect(process.env.MONGO_URI);
         console.log("mongoDB connected");
     }

     catch(error){
         
         console.log(`error connecting mongoDB:${error}`);
     }
} 

module.exports= connectDB;