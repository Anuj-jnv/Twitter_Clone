import express from "express"
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectDB from "./db/connectMongoDb.js";

dotenv.config();
const app =express();
connectDB();

const port=process.env.PORT || 8080;

app.get('/',(rq,res)=>{
    res.send("Hello World");
})
app.use("/api/auth",authRoutes);

app.listen(port,()=>{
    console.log(`server is listening on ${port}`);
    
});