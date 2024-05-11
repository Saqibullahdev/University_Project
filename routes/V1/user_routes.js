const express=require('express');
const {createUser,loginUser}=require('../../controllers/user_controller')
const userRouter=express.Router();

userRouter.post('/create',createUser);
userRouter.post('/login',loginUser);

module.exports=userRouter;

