// Load Libraries
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import {authRouter} from './routes/index.js';

// Comfig Environment Variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((error) => {
    console.log(error);
  });

// Create Express App
const app = express();

// Configure CORS
app.use(cors({
  origin: 'http://localhost:5173',  // Allow requests from the frontend
  credentials: true,                // Allow cookies to be sent
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow necessary HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allow necessary headers
}));

// Middlewares
app.use(express.json());
app.use(cookieParser());


// Routes
app.use('/api/auth', authRouter);

// APP Listen
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});