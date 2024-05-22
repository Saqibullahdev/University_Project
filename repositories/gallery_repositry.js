const { uploadFileToCloudinary } = require('../utils/UploadtoCloudnary');
const { Gallery } = require('../models/index');
const {Admin}=require('../models/index')
class GalleryRepository {

    async AddGallery({ Caption, Description, file, admin }) {
        const AdminID = admin.id;
        
        try {
            const fileUpload = await uploadFileToCloudinary(file, 30);
            const gallery = await Gallery.create({
                Caption,
                Description,
                AdminID,
                ImageURL: fileUpload.secure_url
            });
            gallery.save();
            if (!gallery) return false;

            return gallery;
        } catch (error) {
            console.log(error.message);
            throw new Error('error while Uploading Gallery');
        }
    }

    async GetGallery() {
        try {
            const gallery = await Gallery.findAll({
                attributes: ['GalleryID', 'Caption', 'Description', 'ImageURL', 'createdAt'],
                order: [['createdAt', 'DESC']],
                limit: 30,
                include: { model: Admin, attributes: ['Username',]}
            });
            if (!gallery) return false;
            return gallery;
        } catch (error) {
            console.log(error.message);
            throw new Error('error while Getting Gallery');
        }
    }

    async deleteGallery(GalleryID) {
        try {
            const gallery = await Gallery.destroy({
                where: {
                    GalleryID
                }
            });
            if (!gallery) return false;
            return gallery;
        } catch (error) {
            console.log(error.message);
            throw new Error('error while Deleting Gallery');
        }
    }

    async EditGallery({ Caption, Description, file, admin, GalleryID }) {
        const AdminID = admin.id;
        console.log(file);

        try {
            if (file) {
                var fileUpload = await uploadFileToCloudinary(file, 30);
                console.log(fileUpload.secure_url);
            }
            const gallery = await Gallery.update({
                Caption,
                Description,
                AdminID,
                ImageURL: fileUpload ? fileUpload.secure_url : undefined
            }, {
                where: {
                    GalleryID
                }
            });

            if (!gallery) return false;

            return gallery;
        } catch (error) {
            console.log(error.message);
            throw new Error('error while Uploading Gallery');
        }
    }
}

const galleryRepository = new GalleryRepository;

module.exports = {
    galleryRepository,
};
