import express from 'express';
import { verfiyToken } from '../middleware/jwt.js';
import { createOrder, getOrders } from '../controllers/orders.controller.js';



const router = express.Router();

router.post(`/create`, verfiyToken, createOrder)
router.get(`/`, verfiyToken, getOrders)

export default router;