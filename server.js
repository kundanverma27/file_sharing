const express= require("express");
const dotenv= require("dotenv");
dotenv.config();
const connectDB= require("./configs/mongodbConnection"); 
const UrlRoutes=require("./routes/urlRoutes.js")
const port= process.env.PORT || 8081;
const sendMail = require("./service/MailSender.js"); 
const app= express();
const fileUploadRoute= require("./routes/fileUploadRoute.js");
const ExpiryCron= require("./service/cronJob.js");
//connect to mongoDB
connectDB();
ExpiryCron();

//Basic middleware
app.use(express.json());

app.get("/",(req,res)=>{

    res.send("welcome to file sharing app");
});

let emailOptions={
    emailTo:"221220030@nitdelhi.ac.in",
    emailFrom:"kundanverma69498@gmail.com",link:"abcd",fileName:"abcd",size:1234
}

// app.get("/send",(req,res)=>{

//      sendMail(emailOptions);
//      res.send("mail send successfully");
// })


app.use('/',fileUploadRoute);

// //custom middleware  
// app.use(sanitizeInput);
// app.use(limiter);

// //routes
app.use('/',UrlRoutes);

// app.get('/',(req,res)=>{
   
//      res.send("welcome to url shortener API");
// })

// //404 handler

// app.use((req,res,next)=>{

//       res.status(404).json({
           
//          error:{
//               message:'Route not found'
//          }
//       });
// })

// //error handling middleware

// app.use((err,req,res,next)=>{

//      console.error(err.stack);
//      res.status(err.status||500).json({
           
//           error:{
//               message:err.message|| 'Internal server error'
//           }
//      });
// })


app.listen(port,()=>{
   
    console.log(`server is running on port ${port}`);
});