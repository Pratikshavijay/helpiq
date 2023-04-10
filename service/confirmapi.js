
import User from '../models/user'
export const confirmapiService = async (email, otp) => {
    const detail = await User.find({ email, otp })
    console.log("detail is ...................",detail)
    if (detail.length) {
        const updatedone = await User.updateOne({ email, otp }, { $set: { isverified: true} })
        console.log("updateone is >>>>>>>>>>>>>>>>>>>>>........................",updatedone)
        return updatedone
    }
    else {
        return null;
    }
}