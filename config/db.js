import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
export const connectDB = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGOOSE_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (data) => {
        console.log("Database is connected succesfully")
    }, (err) => {
        console.log(err);
    })
    const dbConnection = mongoose.connection;
    dbConnection.on('error', console.error.bind(console, 'connection error:'));
    dbConnection.once('open', function () {
        console.log('Connected to MongoDB');
    });
}