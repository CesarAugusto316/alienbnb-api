import { Router } from 'express';
import {
  getAllPosts, getPost, createPost, checkBody, updatePost, deletePost,
} from '../controllers/postsControllers.js';


export const postRoutes = Router();

postRoutes.route('/').get(getAllPosts).post(checkBody, createPost);
postRoutes.route('/:id').get(getPost).patch(updatePost).delete(deletePost);
