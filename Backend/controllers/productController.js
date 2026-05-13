import Products from "../models/Product";

//create product
const createProduct = async (req, res) =>{
  try{
    const result = await Products.create(req.body);
    if(result){
      return res.status(201).json({message:"Product created successfully",result});
    }else{
      res.json({message : "Product not created", result});
    }
  } catch(error){
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

//get product
const getProduct = async (req,res) =>{
  try{
    const result = await Products.find().sort({createdAt:-1});
   if(result){
    return res.status(200).json({message:"Product fetched successfully",result});
   }else{
    res.json({message : "Product not fetched", result});
   }
  }catch(error){
    res.status(500).json({ message: "Server error", error: error.message });
  }
}


//update product

const updateProduct = async (req,res) =>{
  try{
    const result = await Products.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(result){
      return res.status(200).json({message:"Product updated successfully",result});
    }else{
      res.json({message : "Product not updated",result});
    }
  }catch(error){
    res.status(500).json({ message: "Server error", error: error.message });
  }  
}

//delete product
const deleteProduct = async (req,res) =>{
  try{
    const result = await Products.findByIdAndDelete(req.params.id);
    if(result){
      return res.status(200).json({message:"Product deleted successfully",result});
    }else{
      res.json({message : "Product not deleted",result});
    }
  }catch(error){
    res.status(500).json({ message: "Server error", error: error.message });
  }  
}
