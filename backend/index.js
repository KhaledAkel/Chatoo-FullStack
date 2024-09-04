// Load Libraries
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

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

// Middlewares
app.use(express.json());

// APP Listen
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});