import express from 'express';
import { verfiyToken } from '../middleware/jwt.js';
import { createOrder, deleteOrder, getOrders, getSellerOrders, updateOrder } from '../controllers/orders.controller.js';



const router = express.Router();

router.post(`/create`, verfiyToken, createOrder)
router.get(`/`, verfiyToken, getOrders)
router.put(`/:id`, verfiyToken, updateOrder)
router.get(`/seller`, verfiyToken, getSellerOrders)
router.delete(`/:id`, verfiyToken, deleteOrder)

export default router;