import mongoose from 'mongoose';


const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 1,
  },
});

export const Todo = mongoose.model('Todo', todoSchema);
