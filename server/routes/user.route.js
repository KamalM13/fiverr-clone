import express from 'express';

import { addBillingInformation, deleteUser, getBillingInformation, getCountry, getGigUser, getImage, getUserId, getUserInfo, getUsername, isSeller } from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

router.get('/userId', verifyToken, getUserId)
router.get('/userInfo/', verifyToken, getUserInfo)
router.get('/isSeller',verifyToken, isSeller)
router.get('/billingInformation', verifyToken, getBillingInformation)
router.delete('/:id', verifyToken, deleteUser)
router.get('/:id', verifyToken, getGigUser)
router.get('/', verifyToken, getUsername)
router.get('/:id/image', verifyToken, getImage)
router.get('/:id/country', getCountry)
router.post('/billingInformation/:gigId/', verifyToken, addBillingInformation)
export default router;