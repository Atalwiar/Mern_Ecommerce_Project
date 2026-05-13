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
    const {email , password} = req.body;
    const user = await User.findOne({email});
    if(!user){
      return res.status(400).json({message:"User not found"});
      // res.redirect("/api/auth/signup");
    }
    const match = await bcrypt.compare(password,user.password);
    if(!match){
      return res.status(400).json({message:"invalid credentials"});
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.json({
      message:"Login successful",
      token,
      user:{
        id:user._id,
        name:user.name,
        email:user.email
      }
    })
  }catch(error){
    res.status(500).json({ message: "Server error", error: error.message });
    
  }
}
