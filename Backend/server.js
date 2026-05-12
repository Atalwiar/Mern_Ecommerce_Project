import express from "express";
import configDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
  res.send("hello");
})
app.listen(process.env.PORT,()=>{
  console.log("server is running on port",process.env.PORT);
})

configDB();