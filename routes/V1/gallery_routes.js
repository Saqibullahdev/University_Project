const express=require('express');
const GalleryRouter=express.Router();
const isAdmin=require('../../middleware/isAdmin')
const {AddGallery,deleteGallery,GetGallery}=require('../../controllers/gallery_controller')

GalleryRouter.post('/add',isAdmin,AddGallery)
GalleryRouter.get('/get',GetGallery)
GalleryRouter.delete('/delete/:GalleryID',isAdmin,deleteGallery)

module.exports=GalleryRouter;

