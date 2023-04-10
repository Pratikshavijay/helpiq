import mongoose from 'mongoose';

 
var UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: false
    },
    isActive: {
        type: Boolean,
        default: false

    },
    createdAt:{
        type:Date,
        default:  Date.now
    } ,
    updatedAt: {
        type: Date,
        default:  Date.now
    },
    email:{
        type: String,
        required:true,
        unique:true,
        lowercase:true
    },
    isverified:{
        type:Boolean,
        default:false
    },
    otp:{
        type:Number,
        required:true
    }
    

});
 
module.exports = mongoose.model("users", UserSchema, "Users");