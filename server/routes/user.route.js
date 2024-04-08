import express from 'express';

import { deleteUser, getImage, getUsername } from '../controllers/user.controller.js';
import { verfiyToken } from '../middleware/jwt.js';

const router = express.Router();

router.delete('/:id',verfiyToken,deleteUser)
router.get('/:id', verfiyToken, getUsername)
router.get('/:id/image', verfiyToken, getImage)

export default router;