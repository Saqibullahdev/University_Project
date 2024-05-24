const { galleryRepository } = require('../repositories/gallery_repositry');
const { ReasonPhrases, StatusCodes } = require('http-status-codes');

// Add Gallery

const AddGallery = async (req, res) => {
    const { Caption, Description } = req.body;
    if (!req.files.file) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Please Upload a file', success: false });
    if(!Caption || !Description) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Please Enter Caption and Description', success: false });
    const file = req.files.file;
    const admin = req.admin;
    console.log(file)

    try {
        const newGallery = await galleryRepository.AddGallery({ Caption, Description, file, admin });
        if (!newGallery) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Error while Uploading Gallery', success: false });
        return res.status(StatusCodes.CREATED).json({
            success: true,
            newGallery
        });

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message
        });
    }
}

const GetGallery = async (req, res) => {
    try {
        const gallery = await galleryRepository.GetGallery();
        if (!gallery) return res.status(StatusCodes.NOT_FOUND).json({ message: 'Error while Getting Gallery' });
        return res.status(StatusCodes.OK).json({
            success: true,
            gallery
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message
        });
    }
}

const deleteGallery = async (req, res) => {
    if (!req.params) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Please Enter GalleryID', success: false });
    const { GalleryID } = req.params;
    try {
        const gallery = await galleryRepository.deleteGallery(GalleryID);
        if (!gallery) return res.status(StatusCodes.NOT_FOUND).json({ message: 'Error while Deleting Gallery' });
        return res.status(StatusCodes.OK).json({
            success: true,
            gallery
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    AddGallery,
    GetGallery,
    deleteGallery
}
