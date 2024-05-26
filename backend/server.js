import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.route.js";
import {v2 as cloudinary} from 'cloudinary';

import connectDB from "./db/connectMongoDb.js";

dotenv.config();
connectDB();

const app =express();

// middlewares
app.use(express.json({ limit: "5mb" }));//to parse req body
app.use(express.urlencoded({ extended: true }));//to parse form data(urlencoded)
app.use(cookieParser());

const port=process.env.PORT || 8080;

          
cloudinary.config({ 
  cloud_name: 'dyqa7ohun', 
  api_key: '355914692581717', 
  api_secret: 'lxkrIxmNU4CXEYqnDpKq7kL-UDM' 
});



app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);



app.listen(port,()=>{
    console.log(`server is listening on ${port}`);
    
});