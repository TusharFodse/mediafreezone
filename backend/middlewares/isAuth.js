import jwt from 'jsonwebtoken'
import {User} from '../models/userModel.js'



export const isAuth= async (req,res,next) =>{
    try {
        const token =req.cookies.token;
         console.log("Token received:", token);

        if(!token)  
            return res.status(403).json({
            message:"Please Login"
        })
        
        const decodedData=jwt.verify(token,process.env.JWT_SEC);

        if(!decodedData)
            return res.status(403).json({
            message:"token expired"
        });


        req.user = await User.findById(decodedData.id)

        next();





              
    } catch (error) {
        res.status(500).json({
            console.error("Error in isAuth middleware:", error);
            message:"Please Login"
        })
        
    }
}
