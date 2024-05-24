const {uploadFileToCloudinary}=require('../utils/UploadtoCloudnary')
const {Notification}=require('../models/index')
class NotificationRepositry{

    async AddNotification({title,Message,file,admin}){
        const AdminID=admin.id
        

        try {
            const fileUpload= await uploadFileToCloudinary(file,30)
            console.log(fileUpload.secure_url)
            const notification=await Notification.create({
                title,
                Message,
                AdminID,
                ImageURL:fileUpload.secure_url
            })
            notification.save()
            if(!notification) return false

            return notification
        } catch (error) {
            console.log(error.message)
            throw new Error('error while Uploading Notification')
        }

    }
   
    async GetNotification(){
        try {
            const notification=await Notification.findAll({
                attributes:['NotificationID','title','Message','ImageURL','Date'],
                order:[['Date','DESC']],
                limit:30

            })
            if(!notification) return false
            return notification
        } catch (error) {
            console.log(error.message)
            throw new Error('error while Getting Notification')
        }
    }

    async deleteNotification(NotificationID){
        try {
            const notification=await Notification.destroy({
                where:{
                    NotificationID
                }
            })
            if(!notification) return false
            return notification
        } catch (error) {
            console.log(error.message)
            throw new Error('error while Deleting Notification')
        }
    }

    async EditNotification({title,Message,file,admin,NotificationID}){
        const AdminID=admin.id
        console.log(file)

        try {
            if(file)  {const fileUpload= await uploadFileToCloudinary(file,30)
}
            console.log(fileUpload.secure_url)
            const notification=await Notification.update({
                title,
                Message,
                AdminID,
                ImageURL:fileUpload.secure_url
            },{
                where:{
                    NotificationID
                }
            })

            if(!notification) return false

            return notification
        } catch (error) {
            console.log(error.message)
            throw new Error('error while Uploading Notification')
        
    }

}
}

const notificationRepositry=new NotificationRepositry;

module.exports={
    notificationRepositry,
    

}