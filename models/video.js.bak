import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  videoId:{
    type:String,
    required:true
    
},
  title: {
    required: true,
    type: String,
  },
  url: {
    required: true,
    type: String,
  },
  products: [{ id: { type: Schema.Types.ObjectId, ref: "Product" } }],
});

const video = mongoose.model('Video', videoSchema)
export default video;