import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  videoId:{
    type:Number,
    required:true
},
  title: {
    required: true,
    type: String,
  },
  productURL: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  title:{
    required:true,
    type:String,
  },
});

const product = mongoose.model("Product", productSchema);
export default product;