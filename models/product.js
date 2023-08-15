import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  videoId: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  productURL: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
