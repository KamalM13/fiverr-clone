import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import { createChat, createMessage, getChats, getMessage } from '../controllers/chat.controller.js';

const router = express.Router();

router.post('/message/:id', verifyToken, createMessage)
router.get('/message/:id', verifyToken, getMessage)
router.get('/', verifyToken, getChats)
router.post('/', verifyToken, createChat)
export default router;