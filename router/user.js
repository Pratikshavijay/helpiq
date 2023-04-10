import express from 'express'
import * as userValidator from '../validations/user'
import { register, login } from '../controller/user';
import { validate } from '../middleware/validate';
export const userRouter = express.Router();
userRouter.post('/registration', (req, res, next) => {
    console.log("hello welcomE")
    next()
}, validate(userValidator.registration), (req, res, next) => {
    console.log("hello welcomE")
    next()
}, register);
userRouter.post('/login', validate(userValidator.login), login);

