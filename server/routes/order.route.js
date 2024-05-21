import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import { createOrder, deleteOrder, getOrders, getSellerOrders, updateOrder } from '../controllers/orders.controller.js';



const router = express.Router();

router.post(`/create`, verifyToken, createOrder)
router.get(`/`, verifyToken, getOrders)
router.put(`/:id`, verifyToken, updateOrder)
router.get(`/seller`, verifyToken, getSellerOrders)
router.delete(`/:id`, verifyToken, deleteOrder)

export default router;