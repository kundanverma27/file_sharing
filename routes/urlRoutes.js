const {shortenUrlHandler,redirectUrl}= require('../service/urlService');

const express= require('express');
const router= express.Router();

// url shortening endpoint
router.post('/shorten',shortenUrlHandler);

// url redirection endpoint- must after /shorten to avoid conficts
router.get('/:shortId',async(req,res,next)=>{

     try{
         
        const originalUrl= await redirectUrl(req.params.shortId);
        res.redirect(originalUrl);
     }
     catch(error){

         if(error.message=='URL not found'){

            return res.status(404).json({
               error:{
                  mesaage:'short URL not found'
               }
        });
    }

     next(error);

     }
});

module.exports= router;
