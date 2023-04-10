import express from 'express'
import {userRouter} from './user';
import { confirmapiRouter } from './confirmapi';
var router = express.Router();
router.use('/user', userRouter);
router.use('/otp',confirmapiRouter)
export default router;