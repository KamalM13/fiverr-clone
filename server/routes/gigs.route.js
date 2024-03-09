import { createGig, deleteGig, getGig, getGigs } from '../controllers/gigs.controller.js';
import { verfiyToken } from '../middleware/jwt.js';
import express from "express"

const router = express.Router()


router.get('/', verfiyToken, getGigs)
router.get('/single/:id', verfiyToken, getGig)
router.delete('/:id', verfiyToken, deleteGig)
router.post('/', verfiyToken, createGig)

export default router;