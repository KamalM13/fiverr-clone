import express from 'express';
import { verfiyToken } from '../middleware/jwt.js';
import { createChat, createMessage, getChats, getMessage } from '../controllers/chat.controller.js';

const router = express.Router();

router.post('/message/:id', verfiyToken, createMessage)
router.get('/message/:id', verfiyToken, getMessage)
router.get('/', verfiyToken, getChats)
router.post('/', verfiyToken, createChat)
export default router;