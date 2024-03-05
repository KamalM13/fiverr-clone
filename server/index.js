import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//Routers
import authRoute from './routes/auth.route.js';


const app = express();
dotenv.config();
mongoose.set('strictQuery',true)

const connect = async () => { 
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('Connected to database');
    } catch (error) {
        console.log(error);
    }
}

app.use("/api/auth", authRoute)


app.listen(3000, () => {
    connect();
  console.log('Server is running on port 3000');
});