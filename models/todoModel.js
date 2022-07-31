import mongoose from 'mongoose';


const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 1,
  },
  completed: {
    type: Boolean,
    required: false,
    default: false,
  },
});

export const Todo = mongoose.model('Todo', todoSchema);
