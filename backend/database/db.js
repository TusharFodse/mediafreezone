import mongoose from "mongoose";
// import userModel from '../models/userModel.js';



const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName:"mediazone",

        });
        console.log("Mongodb connected");
        
    } catch (error) {
        console.log(error)
    }
};

export default connectDb;