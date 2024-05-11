const express=require('express');
const notificationRouter=express.Router();
const isAdmin=require('../../middleware/isAdmin')

const {AddNotification,deleteNotification,GetNotification}=require('../../controllers/notification_controller')

notificationRouter.post('/add',isAdmin,AddNotification)
notificationRouter.get('/get',GetNotification)
notificationRouter.delete('/delete/:NotificationID',isAdmin,deleteNotification)

module.exports=notificationRouter;

