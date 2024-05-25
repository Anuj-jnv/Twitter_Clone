import express from "express"
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectDB from "./db/connectMongoDb.js";
import cookieParser from "cookie-parser";

dotenv.config();
connectDB();

const app =express();

// middlewares
app.use(express.json({ limit: "5mb" }));//to parse req body
app.use(express.urlencoded({ extended: true }));//to parse form data(urlencoded)
app.use(cookieParser());

const port=process.env.PORT || 8080;



app.use("/api/auth",authRoutes);



app.listen(port,()=>{
    console.log(`server is listening on ${port}`);
    
});