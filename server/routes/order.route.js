import express from 'express';
import { verfiyToken } from '../middleware/jwt.js';
import { createOrder, deleteOrder, getOrders } from '../controllers/orders.controller.js';



const router = express.Router();

router.post(`/create`, verfiyToken, createOrder)
router.get(`/`, verfiyToken, getOrders)
router.delete(`/:id`, verfiyToken, deleteOrder)

export default router;