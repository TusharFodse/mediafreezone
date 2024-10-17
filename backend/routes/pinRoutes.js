import express from 'express';
import { isAuth } from '../middlewares/isAuth.js';
import uploadFile from '../middlewares/multer.js';
import { commentOnPin, createPin, deleteComment, deletePin, downloadPin, getAllpins, getSinglepin, updatePin } from '../controllers/pinControllers.js';
// import pinRoutes from './Pinroute';

const router =express.Router();

router.post("/new", isAuth, uploadFile, createPin);
router.get("/all",isAuth,getAllpins);
router.get("/:id",isAuth,getSinglepin);
router.put("/:id",isAuth,updatePin);
router.delete("/:id",isAuth, deletePin);
router.post("/comment/:id",isAuth,commentOnPin);
router.delete("/comment/:id",isAuth, deleteComment);
// app.use('/api/pins', pinRoutes);
router.get("/download/:id", isAuth, downloadPin);   



export default router;