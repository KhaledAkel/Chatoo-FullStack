// Load Libraries
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// Comfig Environment Variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) throw err;
});

// Create Express App
const app = express();
app.use(express.json());

