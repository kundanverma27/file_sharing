const nodemailer=require("nodemailer");
const transporter= require("../configs/Mailer");



const sendMail= async({emailTo,emailFrom,fileName,size})=>{
     
    await transporter.sendMail({
         from:emailFrom,
         to:emailTo,
         subject:"your file is ready to download",
         text:'Hi from your nodemailer project'
    },function(err,data){

         if(err){
             console.log("Error "+ err);
         }
         else{
             console.log(`email sent successfully to: ${emailTo}`);
         }
    })
} 

module.exports= sendMail;