import express from 'express';

import { deleteUser, getUsername } from '../controllers/user.controller.js';
import { verfiyToken } from '../middleware/jwt.js';

const router = express.Router();

router.delete('/:id',verfiyToken,deleteUser)
router.get('/',verfiyToken,getUsername)

export default router;