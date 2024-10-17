import { Pin } from "../models/pinModel.js";
import TryCatch from "../utils/TryCatch.js";
import getDataUrl from "../utils/urlGenerator.js";
import cloudinary from 'cloudinary'

import fs from 'fs';
import { fileURLToPath } from "url"; 
import path, { dirname } from 'path';

import axios from 'axios';


 
export const createPin =TryCatch(async(req,res)=>{
    console.log(req.body);
    console.log(req.file); 
    const {title, pin} =req.body
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    const file = req.file;
  




    const fileUrl = getDataUrl(file); // Use the appropriate method to process the buffer
    const cloud = await cloudinary.v2.uploader.upload(fileUrl.content);

    await Pin.create({
        title,
        pin,
        image:{
            id: cloud.public_id,
            url: cloud.secure_url,
        },
        owner: req.user._id,
    });

    res.json({
        message: "Pin Created"
    });


});

export const getAllpins= TryCatch(async(req,res)=>{
    const pins =await Pin.find().sort({createdAt:-1});

    res.json(pins);
})

export const getSinglepin = TryCatch(async (req, res) => {
    const pin = await Pin.findById(req.params.id).populate("owner", "-password");

    if (!pin) {
        return res.status(404).json({ message: "Pin not found" });
    }

    res.json(pin);
});

export const commentOnPin =TryCatch(async (req,res)=>{
    console.log("hello")
    const pin =await Pin.findById(req.params.id);


    if(!pin)
        return res.status(404).json({
    message:"No pin this id"})

    pin.Comment.push({
        user: req.user._id,
        name: req.user.name,
        comment: req.body.comment,
    });

    await pin.save()
   
    res.json({
        
        message: "Comment Added"
    })
});


export const deleteComment = TryCatch(async (req, res) => {
    const pin = await Pin.findById(req.params.id);
    

    if (!pin)
        return res.status(404).json({
            message: "No pin with this id"
        });
   
    if (!req.query.commentId)
        return res.status(404).json({
            message: "Please provide a comment ID",
        });

    // Make sure to reference "comments" instead of "Comment"
    const commentIndex = pin.Comment.findIndex(
        (item) => item._id.toString() === req.query.commentId.toString()
    );

    if (commentIndex === -1) {
        return res.status(404).json({
            message: "Comment not found"
        });
    }

    const comment = pin.Comment[commentIndex];

    if (comment.user.toString() === req.user._id.toString()) {
        pin.Comment.splice(commentIndex, 1); // Delete the comment
        await pin.save();
        return res.json({
            message: "Comment Deleted" // Correct message for deletion
        });
    } else {
        return res.status(403).json({
            message: "You are not the owner of this comment"
        });
    }
});

export const deletePin =TryCatch(async (req,res)=>{
    const pin =await Pin.findById(req.params.id);

    if(!pin)
        return res.status(404).json({
               message:"No Pin with this id ",
    
        });
    
    if (!pin)
        return res.status(400).json({
            message : "No pin with this id",
        });
    if (pin.owner.toString() !== req.user._id.toString())
        return res.status(403).json({
        message:"Unauthorize",
    
        })

        await cloudinary.v2.uploader.destroy(pin.image.id)

        await pin.deleteOne();
        res.json({
            message:"Pin Deleted"
        })


})

// export const downloadPin = TryCatch(async (req, res) => {
//     const pin = await Pin.findById(req.params.id);
    
//     if (!pin) {
//         return res.status(404).json({
//             message: "Pin not found",
//         });
//     }
//     const __filename= fileURLToPath(import.meta.url)
//     const __dirname=dirname(__filename)

//     const imageUrl = pin.image.url;
//     const downloadsDir = path.join(__dirname, '..', 'downloads');
// const filePath = path.join(downloadsDir, `${pin._id}.jpg`);

// // Ensure the 'downloads' directory exists
// if (!fs.existsSync(downloadsDir)) {
//     fs.mkdirSync(downloadsDir, { recursive: true });
// }

// // Now you can use 'filePath' to save your file
// console.log(`File will be saved to: ${filePath}`);

//     // Create a local path to save the file, e.g., a 'downloads' directory
    

//     // Fetch and download the image from Cloudinary
//     const writer = fs.createWriteStream(filePath);

//     const response = await axios({
//         url: imageUrl,
//         method: 'GET',
//         responseType: 'stream',
//     });

//     // Pipe the image data into the local file system
//     response.data.pipe(writer);
//     writer.on("finish", () => {
//         res.download(filePath); // Download the image
//       });
    


//     // After the image has been successfully downloaded, respond to the client
//     writer.on('finish', () => {
//         res.json({
//             message: "Image downloaded successfully",
//             downloadPath: filePath, // Local path of the downloaded image
//         });
//     });

//     writer.on('error', (err) => {
//         res.status(500).json({
//             message: "Error downloading the image",
//             error: err.message,
//         });
//     });
// });
export const downloadPin = TryCatch(async (req, res) => {
    const pin = await Pin.findById(req.params.id);
    
    if (!pin) {
      return res.status(404).json({
        message: "Pin not found",
      });
    }
    
    const imageUrl = pin.image.url;
    res.redirect(imageUrl); // Redirect the user to download the image from Cloudinary
  });
  
  
  

export const updatePin=TryCatch(async(req,res)=>{
    const pin =await Pin.findById(req.params.id);

    
    if (!pin)
        return res.status(400).json({
            message : "No pin with this id",
        });
    if (pin.owner.toString() !== req.user._id.toString())
        return res.status(403).json({
        message:"Unauthorize",
    
        });
        pin.title=req.body.title;
        pin.pin =req.body.pin;

        await pin.save()

        res.json({
            message:"pin got Updated"
        })

})