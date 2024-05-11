const express=require('express');
const V1Router=express.Router();

const adminRouter=require('./admin_routes');
const emailRouter=require('./emails_routes');
const galleryRouter=require('./gallery_routes');
const notificationRouter=require('./notification_routes');
const userRouter=require('./user_routes');

V1Router.use('/admin',adminRouter);
V1Router.use('/email',emailRouter);
V1Router.use('/gallery',galleryRouter);
V1Router.use('/notification',notificationRouter);
V1Router.use('/user',userRouter);

module.exports=V1Router;