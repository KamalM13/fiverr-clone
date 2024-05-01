import express from 'express';

import { deleteUser, getCountry, getGigUser, getImage, getUsername } from '../controllers/user.controller.js';
import { verfiyToken } from '../middleware/jwt.js';

const router = express.Router();

router.delete('/:id',verfiyToken,deleteUser)
router.get('/:id', verfiyToken, getGigUser)
router.get('/', verfiyToken, getUsername)
router.get('/:id/image', verfiyToken, getImage)
router.get('/:id/country',getCountry)
export default router;