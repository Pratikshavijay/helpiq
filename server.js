import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from './router';
import cors from 'cors';
dotenv.config();
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    allowedHeaders: ["sessionid", "content-type", "x-jwt-token", "authorization"],
    exposedHeaders: ["sessionid"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);
app.use('/api', router);
app.listen(process.env.PORT, (err, res) => {
  connectDB();
console.log("App listening on port " + process.env.PORT);

})


// var sender= nodemailer.createTransport({
//   service: 'gmail',
  
//   auth: {
//     user: process.env.USER,
//     pass: process.env.PASS
//   }
//   });
  
//   var mail = {
//   from: "pratikshavijaytestwork@gmail.com",
//   to: "vijaypratiksha373@gmail.com",
//   subject: "Sending Email using Node.js",
//   text: "That was easy!"
//   };
//   console.log("this is output of ....................",mail)
//   sender.sendMail(mail, function(error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent successfully: "
//           + info.response);
//   }
//   });
//   console.log("sender..............................",sender)
  
// });
