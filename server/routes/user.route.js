import express from 'express';

import { addBillingInformation, deleteUser, getBillingInformation, getCountry, getGigUser, getImage, getUserId, getUsername } from '../controllers/user.controller.js';
import { verfiyToken } from '../middleware/jwt.js';

const router = express.Router();

router.get('/userId', verfiyToken, getUserId)
router.get('/billingInformation', verfiyToken, getBillingInformation)
router.delete('/:id', verfiyToken, deleteUser)
router.get('/:id', verfiyToken, getGigUser)
router.get('/', verfiyToken, getUsername)
router.get('/:id/image', verfiyToken, getImage)
router.get('/:id/country', getCountry)
router.post('/billingInformation/:gigId/', verfiyToken, addBillingInformation)
export default router;