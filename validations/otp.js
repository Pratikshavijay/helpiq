import Joi from 'joi';
export const otp ={
    body : Joi.object().keys({
        email: Joi.string().required(),
        otp:  Joi.string().required()
    })
}