import Products from "../models/Product";

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