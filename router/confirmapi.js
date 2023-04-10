import express from 'express'
import * as otpValidator from '../validations/otp'
import { confirmapicontroller } from '../controller/confirmapi';
import { validate } from '../middleware/validate';

export const  confirmapiRouter= express.Router()
  confirmapiRouter.post('/confirmapi',(req,res,next)=>{
    console.log("come on indiaaaaaa"),next()
    },
    validate(otpValidator.otp),(req,res,next)=>{
        console.log(".................................................... ")
        next()
    },confirmapicontroller)