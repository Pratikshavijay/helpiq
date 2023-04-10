import Joi from 'joi';

export const registration = {
    body: Joi.object().keys({
        firstName: Joi.string().required(),
        password: Joi.string().required().min(8).max(20).alphanum(),
        lastName: Joi.string().required(),
        email: Joi.string().required()
    }),
};
