// Express APP
import express from 'express';
import cors from 'cors';


// Set up the express app
const app = express();

// Parse incoming requests data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());



