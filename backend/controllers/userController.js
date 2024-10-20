import { User } from "../models/userModel.js";
import bcrypt from 'bcrypt' 
import TryCatch from "../utils/TryCatch.js";
import { json } from "express";
import genrateToken from "../utils/genrateToken.js"; 
// mukesh@gmail.com pass:-neww 

console.log('userController loaded');
export const registerUser= TryCatch(async(req,res)=>{
    try{const {name, email, password}=req.body;

       let user =await User.findOne({email})

       if(user) return res.status(400).json({
        message : "Alredy have account with this email",
       })

       const hashpassword = await bcrypt.hash(password,10);
       
       user = await User.create({
        name,
        email,
        password: hashpassword,

       }) 

       genrateToken(user._id,res);

       
       res.status(201).json({
        user,
        message:"user register"
       })}catch(e){
        console.log("error login",e)
       }
        
})

export const loginUser = TryCatch(async(req,res)=>{
    const {email,password}= req.body

    const user =await User.findOne({email});

    if(!user)
        return res.status(400).json({
          message: "No user with this mail"
        });

    const comparepassword=await bcrypt.compare(password,user.password);

    if(!comparepassword)return res.status(400).json({
        message: "Wrong password"
      });


      genrateToken(user._id,res);

      res.json({
        user,message:"Logged in "
      })


})

export const myProfile= TryCatch(async(req,res)=>{
  const user =await User.findById(req.user._id)
  res.json(user);

})

export const userProfile=TryCatch(async(req,res)=>{
  const user= await User.findById(req.params.id).select("-password")

  res.json(user);
  
})


export const followAndUnfollowUser=TryCatch(async(req,res)=>{
  const user= await User.findById(req.params.id);
  const loggedInUser = await User.findById(req.user._id)


  if(!user)
    return res.status(400).json({
      message: "No user with this this id"
    });
  if(user._id.toString() === loggedInUser._id.toString())
    return res.status(400).json({
      message: "you can't follow yorself",

    });

    if(user.followers.includes(loggedInUser._id)){
      const indexFollowing = loggedInUser.following.indexOf(user._id)
      const indexfollowers = user.followers.indexOf(loggedInUser._id)

      loggedInUser.following.splice(indexFollowing,1)
      user.followers.splice(indexfollowers,1)

      await loggedInUser.save()
      await user.save()

      res.json({
        message: "User Unfollow",
      });


    }else{
      loggedInUser.following.push(user._id);
      user.followers.push(loggedInUser._id);
      await loggedInUser.save()
      await user.save()

      res.json({
        message: "User followed",
      });

    }

});

export const logOutUser = TryCatch(async (req,res)=>{
  res.cookie("token","",{maxAge : 0});

  res.json({
    message : "Logged out Sucessfully",
  })
})
