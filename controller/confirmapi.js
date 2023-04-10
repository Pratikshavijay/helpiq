import httpStatus from 'http-status';
import logger from '../config/loggerconfig';
import { confirmapiService } from '../service/confirmapi';

export const confirmapicontroller = async (req, res) => {
    const { email,otp} = req.body
    console.log("this is req.body console",req.body)
    const userData = await confirmapiService(email,otp);
    console.log("userdata is >>>>>>>>>>>>>>>>>>>>>>>>",userData)
    try {
        if (userData==null) {
            res.status(httpStatus.BAD_REQUEST).send({ success: false, message: 'Icredentials' })
            return userData;
        }

        res.status(httpStatus.OK).send({
            success: true,
            message: 'Successfully varified'
        })
        return userData;
    }
    catch (err) {
        console.log('Error: ', + err)
        logger.info('Error: ', + err)
        res.status(httpStatus.BAD_REQUEST).send('something went wrong')
    }
}