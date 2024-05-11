const cloudinary = require('cloudinary').v2;
async function uploadFileToCloudinary(file, quality) {
    const options = { }
    if (quality) {
        options.quality = quality;
    }
    options.resource_type = "auto"
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}
module.exports = {uploadFileToCloudinary};