const cloudinary = require("cloudinary").v2;
require("dotenv").config({path:'../.env'});
console.log(process.env.cloud_name)
const cloudinaryConnect = () => {
    try{
            cloudinary.config({
                cloud_name:process.env.CLOUD_NAME,
                api_key: process.env.API_KEY,
                api_secret: process.env.API_SECRET,
            })
            console.log("connected to cloudinary")
    }
    catch(error) {
        console.log("doesn't connect to cloudinary");
    }
}
module.exports = cloudinaryConnect;