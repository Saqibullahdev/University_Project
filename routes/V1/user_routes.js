const express=require('express');
const {createUser,loginUser,logoutUser,isLoggedin}=require('../../controllers/user_controller')
const userRouter=express.Router();
const isVerifyUser=require('../../middleware/isVerifyUser');

userRouter.post('/create',createUser);
userRouter.post('/login',loginUser);
userRouter.get('/logout',logoutUser);
userRouter.get('/islogin',isVerifyUser,isLoggedin);

module.exports=userRouter;

