import httpStatus from 'http-status';
import { createUserService, loginService } from "../service/user";
import logger from '../config/loggerconfig';
export const register = async (req, res) => {

    const { firstName, password, lastName, email } = req.body
    console.log("this is req.body console", req.body)

    const userData = await createUserService(lastName, password, firstName, email);
    try {
        if (!userData) {
            res.status(httpStatus.BAD_REQUEST).send('Bad Request')
            return userData;
        }

        res.status(httpStatus.OK).send(userData)
        return userData;
    } catch (err) {
        console.log('Error: ', + err)
        logger.info('Error: ', + err)
        res.status(httpStatus.BAD_REQUEST).send('something went wrong')
    }
}
export const login = async (req, res) => {


    const { email, password } = req.body
    console.log("this is login body ..../", req.body)

    const userData = await loginService(email, password);
    try {
        if (!userData) {
            res.status(httpStatus.BAD_REQUEST).send({ success: false, message: 'Incorrect credentials' })
            return userData;
        }

        res.status(httpStatus.OK).send({
            success: true,
            message: 'Login Success',
            token: userData
        })
        return userData;
    } catch (err) {
        console.log('Error: ', + err)
        logger.info('Error: ', + err)
        res.status(httpStatus.BAD_REQUEST).send('something went wrong')
    }
}
