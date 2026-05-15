import mongoose from "mongoose";
import Product from "../models/Product.js";

//create product
export const createProduct = async (req, res) =>{
  try{
    const result = await Product.create(req.body);

    return res.status(201).json({
      message:"Product created successfully",
      result
    });

  } catch(error){
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
}

  

//get product
export const getProduct = async (req,res) =>{
  try{
    const result = await Product.find().sort({createdAt:-1});
    return res.status(200).json({
      message:"Products fetched successfully",
      result
    });
  }catch(error){
    res.status(500).json({ message: "Server error", error: error.message });
  }
}


//update product

export const updateProduct = async (req,res) =>{
  try{
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product id" });
    }

    const result = await Product.findByIdAndUpdate(
      id,
      req.body,
      {new:true, runValidators: true }
    );

    if(result){
      return res.status(200).json({message:"Product updated successfully",result});
    }

    return res.status(404).json({message : "Product not found"});
  }catch(error){
    res.status(500).json({ message: "Server error", error: error.message });
  }  
}

//delete product
export const deleteProduct = async (req,res) =>{
  try{
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product id" });
    }

    const result = await Product.findByIdAndDelete(id);

    if(result){
      return res.status(200).json({message:"Product deleted successfully",result});
    }

    return res.status(404).json({message : "Product not found"});
  }catch(error){
    res.status(500).json({ message: "Server error", error: error.message });
  }  
}


