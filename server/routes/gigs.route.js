import { addGigComment, createGig, deleteGig, deleteGigComment, getGig, getGigRating, getGigs, getUserGigs, updateGigComment, uploadImage } from '../controllers/gigs.controller.js';
import { verifyToken } from '../middleware/jwt.js';
import express from "express"
import multer from "multer"

const router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Specify the upload directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Unique file name
    },
});

const upload = multer({ storage: storage });

router.get('/', verifyToken, getGigs)
router.get('/gigsUser', verifyToken, getUserGigs)
router.post('/uploadImage', verifyToken, upload.single('image') , uploadImage)
router.post('/create', verifyToken, createGig)
router.put('/single/:id/comment/:commentId', verifyToken, updateGigComment)
router.delete('/single/:id/comment/:commentId', verifyToken, deleteGigComment)
router.get('/single/:id', verifyToken, getGig)
router.post('/single/:id/comment', verifyToken, addGigComment)
router.get('/single/:id/rating', verifyToken, getGigRating)
router.delete('/:id', verifyToken, deleteGig)


export default router;