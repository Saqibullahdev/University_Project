const emailRepository = require('../repositories/emails_repositry');
const {ReasonPhrases,StatusCodes}=require('http-status-codes');


const SendEmail=async(req,res)=>{
    try{
        const {Subject,Body}=req.body;
        const UserID=req.user.UserID;
        console.log(req.user)
       
        
        const newEmail=await emailRepository.addEmail({Subject,Body,UserID});
        res.status(StatusCodes.OK).
        json(
            {
                message:ReasonPhrases.OK,
                newEmail,
                succuss:true
            }
        );
    }catch(error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:error.message});
    }
}

module.exports={
    SendEmail
}