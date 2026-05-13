import Products from "../models/Product";

//create product
const createProduct = async (req, res) =>{
  try{
    const result = await Products.create(req.body);
    if(result){
      return res.status(201).json({message:"Product created successfully",result});
    }else{
      res.json({message : "Product not created"});
    }
  } catch(error){
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

//get product
const getProduct = async (req,res) =>{
  try{
    const result = await Products.find();
   if(result){
    return res.status(200).json({message:"Product fetched successfully",result});
   }else{
    res.json({message : "Product not fetched"});
   }
  }catch(error){
    res.status(500).json({ message: "Server error", error: error.message });
  }
}