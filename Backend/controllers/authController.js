import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Sing Up User
export const Signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }

    //Password Hash
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashPassword });

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//Login User
export const Login = async (req, res) => {
  try {

  }catch(error){
    res.status(500).json({ message: "Server error", error: error.message });
    
  }
}
