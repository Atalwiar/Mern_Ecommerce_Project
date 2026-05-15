import express from "express";
import configDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router/authRoutes.js";
import productRouter from "./router/productsRoutes.js";
dotenv.config();
console.log("PORT:", process.env.PORT);
console.log("MONGO:", process.env.MONGO_URL);
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req,res,next)=>{
  console.log("Incoming:", req.method, req.url);
  next();
});
app.use("/api/auth",router);
app.use("/products",productRouter);
app.get("/",(req,res)=>{
  res.send("hello");
})
app.listen(process.env.PORT,()=>{
  console.log("server is running on port",process.env.PORT);
})

configDB();