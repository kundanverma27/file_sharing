const express= require("express");
const dotenv= require("dotenv");
dotenv.config();
const connectDB= require("./configs/mongodbConnection"); 

const port= process.env.PORT || 8081;
const app= express();


//connect to mongoDB
connectDB();

//Basic middleware
app.use(express.json());

// //custom middleware
// app.use(sanitizeInput);
// app.use(limiter);

// //routes
// app.use('/api',UrlRoutes);

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