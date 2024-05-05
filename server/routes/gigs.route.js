import { addGigComment, createGig, deleteGig, deleteGigComment, getGig, getGigRating, getGigs, updateGigComment } from '../controllers/gigs.controller.js';
import { verfiyToken } from '../middleware/jwt.js';
import express from "express"

const router = express.Router()


router.get('/', verfiyToken, getGigs)
router.put('/single/:id/comment/:commentId', verfiyToken, updateGigComment)
router.delete('/single/:id/comment/:commentId', verfiyToken, deleteGigComment)
router.get('/single/:id', verfiyToken, getGig)
router.post('/single/:id/comment', verfiyToken, addGigComment)
router.get('/single/:id/rating', verfiyToken, getGigRating)
router.delete('/:id', verfiyToken, deleteGig)
router.post('/', verfiyToken, createGig)

export default router;