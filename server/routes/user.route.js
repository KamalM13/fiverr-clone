import express from 'express';

import { deleteUser } from '../controllers/user.controller.js';
import { verfiyToken } from '../middleware/jwt.js';

const router = express.Router();

router.delete('/:id',verfiyToken,deleteUser)


export default router;