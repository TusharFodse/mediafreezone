import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/db.js";
import cookieParser from "cookie-parser";
import cloudinary from 'cloudinary';
// import pinRoutes from './routes/Pinroute';
import path from "path"
import cors from 'cors';





dotenv.config(); 
cloudinary.v2.config({
    cloud_name: process.env.Cloud_Name,
    api_key: process.env.Cloud_Api,
    api_secret: process.env.Cloud_Secret,

})



const app =express();


const port=process.env.PORT;

app.use(
  cors({
    origin: 'https://mediafreezone-thbk.vercel.app/', // Replace with your frontend's URL
    credentials: true, // This allows cookies to be sent
  })
);

//Using middlewares
app.use(express.json())
app.use(cookieParser())

// app.get("/",(req,res)=>{
//     res.send("Server is working as it is")
// });


// import routes 
import userRoutes from './routes/userRoutes.js';
import pinRoutes from './routes/pinRoutes.js'

//use routes

app.use("/api/user", userRoutes);   
app.use("/api/pin", pinRoutes);

const __dirname=path.resolve();

app.use(express.static(path.join(__dirname,"/frontend/dist")));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));

})



console.log('JWT_SEC:', process.env.JWT_SEC);





app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
    connectDb();
});


