
import mongoose from "mongoose";

const configDB = async () =>{
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connected")
  } catch (error) {
    console.log(error)
  }
}

export default configDB;