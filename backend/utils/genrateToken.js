import jwt from 'jsonwebtoken'

const genrateToken =(id,res)=>{
    const token=jwt.sign({id}, process.env.Jwt_SEC,{
        expiresIn:"15d",
    });

    res.cookie("token", token,{
        maxAge: 15*24*60*60*1000,
        httpOnly: true,
        sameSite:"strict",
    });
};

export default genrateToken;