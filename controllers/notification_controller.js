
const {notificationRepositry}=require('../repositories/notification_repositry')
const {ReasonPhrases,StatusCodes}=require('http-status-codes')

//add Notification 

const AddNotification= async (req,res)=>{
    const {title,Message}=req.body
    const file = req.files.file;


    const admin=req.admin
    console.log(file)
    try {
        const newNotif= await notificationRepositry.AddNotification({title,Message,file,admin})
        if (!newNotif) return res.status(StatusCodes.BAD_REQUEST).json({message:'error while Uploading Notification'})
        return res.status(StatusCodes.CREATED).
        json({
            succuss:true,
            newNotif
        })
        
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).
        json({
            succuss:false,
            message:error.message
        })
    }
}

const GetNotification=async (req,res)=>{
    try {
        const notification=await notificationRepositry.GetNotification()
        if (!notification) return res.status(StatusCodes.NOT_FOUND).json({message:'error while Getting Notification'})
        return res.status(StatusCodes.OK).
        json({
            succuss:true,
            notification
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).
        json({
            succuss:false,
            message:error.message
        })
    }
}

const deleteNotification=async (req,res)=>{
    const {NotificationID}=req.params
    try {
        const notification=await notificationRepositry.deleteNotification(NotificationID)
        if (!notification) return res.status(StatusCodes.NOT_FOUND).json({message:'error while Deleting Notification'})
        return res.status(StatusCodes.OK).
        json({
            succuss:true,
            notification
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).
        json({
            succuss:false,
            message:error.message
        })
    }
}

module.exports={
    AddNotification,
    GetNotification,
    deleteNotification
}