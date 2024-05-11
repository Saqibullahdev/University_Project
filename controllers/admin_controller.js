const {ReasonPhrases,StatusCodes}=require('http-status-codes')
const adminRepository = require("../repositories/admin_repositry");


const createAdmin=async(req,res)=>{
   try {
        const admin = await adminRepository.createAdmin(req.body);
        if (!admin) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: ReasonPhrases.BAD_REQUEST,
            });
        }

        return res.status(StatusCodes.CREATED).json({
            message: ReasonPhrases.CREATED,
            Username: admin.Username,
            Email: admin.Email,
        });
    
   } catch (error) {
         console.log(error);
         return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
              message: ReasonPhrases.INTERNAL_SERVER_ERROR,
         });
    
   }
}


const LoginAdmin=async(req,res)=>{
    try {
        const token = await adminRepository.LoginAdmin(req.body);
        if (!token) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: ReasonPhrases.BAD_REQUEST,
            });
        }

        return res.cookie("admin_token", token).status(StatusCodes.OK).json({
            message: ReasonPhrases.OK,
            succuss: true,
        });
    
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: ReasonPhrases.INTERNAL_SERVER_ERROR,
        });
    
    }
}

const updateAdmin=async(req,res)=>{
    try {
        const admin = await adminRepository.updateAdmin(req.body);
        if (!admin) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: ReasonPhrases.BAD_REQUEST,
                
            });
        }

        return res.status(StatusCodes.OK).json({
            message: ReasonPhrases.OK,
            data: admin,
        });
    
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: ReasonPhrases.INTERNAL_SERVER_ERROR,
        });
    
    }
}


module.exports = {
    createAdmin,
    LoginAdmin,
    updateAdmin,
};