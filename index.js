import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from "./router/UserRouter.js";
import helmet from "helmet";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose.connect(
    process.env.MOGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('connected'))
    .catch(e => console.log(e));

app.use(express.json())
app.use(helmet())
app.use('/', userRouter)

app.listen(PORT, () => console.log(`port is running on http://localhost:${PORT}`))