
import mongoose from "mongoose";

const Product =new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  description:{
    type:String
  },
  price:{
    type: Number,
    required: true
  },
  category:{
    type: String,
    
  },
  image:{
    type: String,
    
  }, stock: { 
    type: Number,
     default: 0 }
},{
  timestamps: true
});

const Products = mongoose.model("products", Product);
export default Products