
import app from './src/app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
dotenv.config()
const port = process.env.Port || 5000
// mongodb connection
connectDB()



// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
