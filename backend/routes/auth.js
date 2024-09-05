import express from 'express';
import mongoose from 'mongoose';
import { signUp, userIn, signIn } from '../controllers/index.js';



const  authRouter = express.Router();

authRouter.post('/sign-up', signUp);
authRouter.get('/profile', userIn)
authRouter.post('/sign-in', signIn);

export default authRouter;
