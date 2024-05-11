const express=require('express');
const adminRouter=express.Router();
const {createAdmin,LoginAdmin,updateAdmin}=require('../../controllers/admin_controller');


adminRouter.post('/create',createAdmin);
adminRouter.post('/login',LoginAdmin);
adminRouter.put('/update',updateAdmin);


module.exports=adminRouter;

