import express from 'express';
import mongoose from 'mongoose';
import { signUp } from '../controllers';



const  authRouter = express.Router();

authRouter.post('/sign-up', signUp);  

