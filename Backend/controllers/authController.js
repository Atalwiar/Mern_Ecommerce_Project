import User from "../models/User";

export const Signup = async (req,res) =>{
try{
const {name, email, password} = req.body;
  const userExist = await mongoose.findOne({email});
  if(userExist){
    return res.status(400).json({message:"User already exist"});
  }
  const user = await User.create({name,email,password});
  res.status(201).json({message:"User created successfully",user});

}catch(error){
 res.status(500).json({message:"Server error",error});
}

}