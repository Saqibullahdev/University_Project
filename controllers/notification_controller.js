
const {notificationRepositry}=require('../repositories/notification_repositry')
const {ReasonPhrases,StatusCodes}=require('http-status-codes')

//add Notification 

const AddNotification= async (req,res)=>{
    const {title,Message}=req.body
    if(!req.files) return res.status(StatusCodes.BAD_REQUEST).json({message:'Please Upload a file',success:false})
    const file = req.files.file;
    if(!title || !Message) return res.status(StatusCodes.BAD_REQUEST).json({message:'Please Enter Title and Message',success:false})


    const admin=req.admin
    console.log(file)
    try {
        const newNotif= await notificationRepositry.AddNotification({title,Message,file,admin})
        if (!newNotif) return res.status(StatusCodes.BAD_REQUEST).json({message:'error while Uploading Notification', succuss:false})
        return res.status(StatusCodes.CREATED).
        json({
            success:true,
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
    if(!req.params) return res.status(StatusCodes.BAD_REQUEST).json({message:'Please Enter NotificationID',success:false})
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