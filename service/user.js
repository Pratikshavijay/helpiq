import bcrypt from "bcrypt";
import { generateToken } from "../utils/user.js";
import { SALT_ROUNDS } from "../helper/constants";
import nodemailer from 'nodemailer'
import stackOtp from "stack-otp"
import User from '../models/user'
export const createUserService = async (firstName, password, lastName, email) => {
  const isUserExists = await User.findOne({ email });//"email":
  var optgenerate = stackOtp.numericOtp()
  console.log("lets generate otp...........", optgenerate)
  var sender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  });

  var mail = {
    from: "pratikshavijaytestwork@gmail.com",
    to: "ankitapanwar578@gmail.com",
    subject: "Sending Email using Node.js",
    text: `enter this otp,${optgenerate}`
  };

  sender.sendMail(mail, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully: "
        + info.response);
    }
  });

  if (isUserExists) {
    return {
      success: "false",
      message: "email already exists ",
    };
  }
  const salt = bcrypt.genSaltSync(SALT_ROUNDS);
  const encryptedPassword = bcrypt.hashSync(password, salt);
  const newUser = await User.create({
    firstName,
    password: encryptedPassword,
    lastName,
    email,
    otp: optgenerate,
    isverified: false,
    token: "",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  if (newUser._id) {
    return {
      success: true,
      message: "User created successfully",
    };
  }
  return newUser;
}
export const loginService = async (email, password) => {
  const userData = await User.findOne({ email, isActive: true });
  if (!userData) return userData;
  const isPasswordCorrect = bcrypt.compareSync(password, userData.password);
  if (!isPasswordCorrect) {
    return null;
  } else {
    const token = await generateToken({

      userId: userData._id,
      lastName: userData.lastName,
      email: userData.email,
      firstName: userData.firstName
    });
    console.log("token isss...", token)
    await User.updateOne({ _id: userData._id }, { token: token });
    return token;
  }
}

