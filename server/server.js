import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';
import { clerkMiddleware } from '@clerk/express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

await connectDB()
// middlewares
app.use(clerkMiddleware());
app.use(cors());
app.use(express.json());

// Routes
app.get('/',(req,res)=>{
    res.send("API is working");
})
app.use('/api/admin',adminRouter)
app.use('/api/blog',blogRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("server is running on port :"+PORT)
})

export default app;