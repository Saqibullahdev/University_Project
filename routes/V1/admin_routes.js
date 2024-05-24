const express=require('express');
const adminRouter=express.Router();
const {createAdmin,LoginAdmin,updateAdmin,LogoutAdmin,isAdminLoggin}=require('../../controllers/admin_controller');
const isAdmin=require('../../middleware/isAdmin')
adminRouter.post('/create',createAdmin);
adminRouter.post('/login',LoginAdmin);
adminRouter.put('/update',updateAdmin);
adminRouter.get('/isloggin',isAdmin,isAdminLoggin);
adminRouter.get('/logout',LogoutAdmin);


module.exports=adminRouter;

