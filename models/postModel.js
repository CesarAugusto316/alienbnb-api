import mongoose from 'mongoose';


const postSchema = new mongoose.Schema({
  post: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 1,
  },
});

export const Post = mongoose.model('Post', postSchema);
