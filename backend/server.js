import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import notificationRoutes from "./routes/notification.route.js";
import {v2 as cloudinary} from 'cloudinary';

import connectDB from "./db/connectMongoDb.js";

dotenv.config();
connectDB();

const app =express();

// middlewares
app.use(express.json({ limit: "5mb" }));//to parse req body
app.use(express.urlencoded({ extended: true }));//to parse form data(urlencoded)
app.use(cookieParser());

const port=process.env.PORT || 3000;

          
cloudinary.config({ 
  cloud_name: 'dyqa7ohun', 
  api_key: '355914692581717', 
  api_secret: 'lxkrIxmNU4CXEYqnDpKq7kL-UDM' 
});



app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/posts",postRoutes);
app.use("/api/notifications",notificationRoutes);



app.listen(port,()=>{
    console.log(`server is listening on ${port}`);
    
});