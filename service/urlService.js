const express= require('express');
const Url= require('../models/Url');

const { nanoid } = require('nanoid');
const {saveUrl,getUrlByShortId,incrementCount}=require('../repository/UrlRepository');


function isValidUrl(url){

     try{

         new URL(url);
         return true;
     }

     catch(err){

         return false;
     }
}


async function shortenUrl(originalUrl){

     try{

          if(!originalUrl){
             throw new Error('URL is required');
          }

          if(!originalUrl.startsWith('http://') && !originalUrl.startsWith('https://')){
            originalUrl= 'http://' + originalUrl;
          }

          if(!isValidUrl(originalUrl)){
             
             throw new Error('Invalid Url format');
          }

          const shortId= nanoid(6);
          const urlDoc= await saveUrl(shortId,originalUrl);
          return shortId;
     }

     catch(err){

        throw err;
     }
}

async function redirectUrl(shortId){
     
      try{
         
         const urlDoc= await getUrlByShortId(shortId);
         if(!urlDoc){
             
             throw new Error('url not found');
         }
         console.log(urlDoc)
         await incrementCount(urlDoc);
         return urlDoc.originalUrl;

      }
      catch(err){
        throw new Error('Error redirecting url: ' + err.message);
     }
     
}

async function shortenUrlHandler(req,res,next){

     try{

         const {url}= req.body;

         if(!url){

             return res.status(400).json({error:'URL is required'});

         }

         const urlDoc= await shortenUrl(url);

         res.json({

            shortenUrl: `http://${req.get('host')}/api/${urlDoc.shortUrl}`
         });
     }

     catch(err){

        next(err);
     }
}

module.exports={

     shortenUrl,redirectUrl,shortenUrlHandler
};