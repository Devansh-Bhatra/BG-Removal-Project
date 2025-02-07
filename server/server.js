// server.js
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import connectDB from './configs/mongodb.js';

// App configuration
const PORT = process.env.PORT || 4000
const app = express()

// Function to start the server
const startServer = async () => {
  try {
    // DB Connection setup
    await connectDB();

    // Middleware
    app.use(express.json());
    app.use(cors());

    // API Routes
    app.get('/', (req, res) => {
      res.send("Hello World");
    });

    // Start server
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

// Start the server
startServer();