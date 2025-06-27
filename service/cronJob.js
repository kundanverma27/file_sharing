const cron = require("node-cron");

function ExpiryCron(){

     cron.schedule('* * * * *',()=>{
        // every day at 7pm
               markallExpiryFileInDb();
         console.log('running a task every minute');
     });
}

module.exports= ExpiryCron;