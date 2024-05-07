import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

//Routes
import authRoute from './routes/auth.route.js';
import userRoute from './routes/user.route.js';
import gigRoute from './routes/gigs.route.js';
import orderRoute from './routes/order.route.js';
import chatRoute from './routes/chat.route.js';


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

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));



app.use("/server/auth", authRoute)
app.use("/server/users", userRoute)
app.use("/server/gigs", gigRoute)
app.use("/server/orders", orderRoute)
app.use("/server/chat", chatRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";

    res.status(errorStatus).send(errorMessage);
})

app.listen(3000, () => {
    connect();
  console.log('Server is running on port 3000');
});