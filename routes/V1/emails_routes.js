const express=require('express');
const emailRouter=express.Router();
const {SendEmail}=require('../../controllers/email_controller');
const isVerifyUser=require('../../middleware/isVerifyUser')

emailRouter.post('/send',isVerifyUser,SendEmail);

module.exports=emailRouter;

